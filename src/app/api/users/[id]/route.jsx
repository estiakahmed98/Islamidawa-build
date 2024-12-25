import prisma from "../../../../../prisma/prisma";

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const deletedUser = await prisma.newUser.delete({
      where: { id: parseInt(id, 10) },
    });
    return new Response(
      JSON.stringify({ message: "User deleted successfully", deletedUser }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response("Failed to delete user", { status: 500 });
  }
}

//add this code in users [id] folders route.jsx file

export async function GET(req, { params }) {
  try {
    console.log("Fetching user details...");
    const { id } = params;

    if (!id) {
      console.log("No ID provided");
      return new Response(JSON.stringify({ message: "User ID is required" }), {
        status: 400,
      });
    }

    const user = await prisma.newUser.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!user) {
      console.log("User not found");
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    console.log("User details fetched successfully");
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error fetching user:", error.message, error.stack);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
