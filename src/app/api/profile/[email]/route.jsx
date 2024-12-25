import prisma from "../../../../../prisma/prisma";

export async function GET(req, { params }) {
  // Allow only GET requests
  try {
    const email = (await params).email;
    // Fetch user by email
    console.log("Get email:", email);
    const user = await prisma.newUser.findUnique({
      where: { email },
    });

    console.log("Find user:", user);

    if (!user) {
      return new Response({ error: "User not found" }, { status: 404 });
    }

    // Return the user data
    return new Response(JSON.stringify(user));
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response({ error: "Internal server error" }, { status: 500 });
  }
}
