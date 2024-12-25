import prisma from "../../../../prisma/prisma";
import bcrypt from "bcrypt";

const setCorsHeaders = (res) => {
  res.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins (use specific domains in production)
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow only certain methods
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  ); // Allow necessary headers
  res.headers.set("Access-Control-Max-Age", "86400"); // Cache preflight response
};

export async function OPTIONS() {
  // Preflight response for CORS
  const response = new Response(null, { status: 204 });
  setCorsHeaders(response);
  return response;
}

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return new Response("All fields are required", { status: 400 });
    }

    console.log("Attempting login with:", { email, role });

    const newUser = await prisma.newUser.findFirst({
      where: { email, role },
    });

    console.log("User found:", newUser);

    if (!newUser) {
      console.log("No user found with the provided email and role.");
      const response = new Response("Invalid credentials", { status: 401 });
      setCorsHeaders(response);
      return response;
    }

    // Verify password
    const isPasswordValid = newUser.password;
    if (!isPasswordValid) {
      console.log("Invalid password.");
      const response = new Response("Invalid credentials", { status: 401 });
      setCorsHeaders(response);
      return response;
    }

    // Successful login: return user info without password
    const response = new Response(
      JSON.stringify({
        message: `Welcome ${role}!`,
        user: {
          email: newUser.email,
          role: newUser.role,
          name: newUser.fullName,
          id: newUser.id,
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
    setCorsHeaders(response);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    const response = new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
    setCorsHeaders(response);
    return response;
  }
}

export async function GET(req) {
  try {
    const users = await prisma.newUser.findMany();
    const response = new Response(JSON.stringify(users), { status: 200 });
    setCorsHeaders(response);
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    const response = new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
    setCorsHeaders(response);
    return response;
  }
}
