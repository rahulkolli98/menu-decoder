import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Ensure environment variables are loaded
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  // Optionally throw an error or handle it gracefully
}

// Initialize Supabase client with service_role key for backend operations
// Note: We use the service_role key here for simplicity in this example,
// allowing the API route to bypass RLS. For production apps with RLS,
// you might handle authentication differently.
const supabaseAdmin = createClient(supabaseUrl!, supabaseServiceKey!, {
 auth: {
    // It's generally good practice to disable auto-refreshing tokens for server-side clients
    // unless you have specific reasons to keep it enabled.
    autoRefreshToken: false,
    persistSession: false
  }
});


export async function POST(request: Request) {
  if (!supabaseUrl || !supabaseServiceKey) {
     return NextResponse.json({ message: 'Server configuration error: Missing Supabase credentials.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, email, feedback } = body; // Include feedback

    // --- Basic Server-Side Validation ---
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return NextResponse.json({ message: 'Invalid name provided.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ message: 'Invalid email provided.' }, { status: 400 });
    }
    // Feedback is optional, so no validation needed unless you have specific rules

    // --- Add to Supabase Database ---
    const { data, error } = await supabaseAdmin
      .from('waitlist_entries')
      .insert({
          name: name.trim(), // Trim whitespace
          email: email.trim().toLowerCase(), // Trim and normalize email
          feedback: feedback && typeof feedback === 'string' ? feedback.trim() : null // Save feedback if provided
       })
      .select() // Optionally select the inserted data if needed
      .single(); // Expecting a single row insert

    if (error) {
      console.error('Supabase insert error:', error);
      // Check for unique constraint violation (email already exists)
      if (error.code === '23505') { // PostgreSQL unique violation code
         return NextResponse.json({ message: 'This email is already on the waitlist.' }, { status: 409 }); // 409 Conflict
      }
      // Log other specific errors if needed
      return NextResponse.json({ message: 'Database error occurred.' }, { status: 500 });
    }

    console.log(`Waitlist entry added: ${email}`, data); // Log success with optional returned data
    return NextResponse.json({ message: 'Successfully joined waitlist!' }, { status: 201 }); // 201 Created

  } catch (error: any) {
     // Catch potential JSON parsing errors or other unexpected issues
    console.error('Waitlist API route error:', error);
     if (error instanceof SyntaxError) {
        return NextResponse.json({ message: 'Invalid request format.' }, { status: 400 });
     }
    return NextResponse.json({ message: 'An unexpected server error occurred.' }, { status: 500 });
  }
} 