import prisma from "../../../../prisma/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract query parameters
    const role = searchParams.get("role");
    const division = searchParams.get("division");
    const district = searchParams.get("district");
    const upazila = searchParams.get("upazila");
    const tunion = searchParams.get("tunion");
    const fullName = searchParams.get("fullName");

    // Log the query parameters for debugging
    console.log("Filters received:", {
      role,
      division,
      district,
      upazila,
      tunion,
      fullName,
    });

    // Construct filters dynamically
    const filters = {};
    if (role) filters.role = role;
    if (fullName) filters.fullName = fullName;
    if (division) filters.division = division;
    if (district) filters.district = district;
    if (upazila) filters.upazila = upazila;
    if (tunion) filters.tunion = tunion;

    // Fetch filtered users from Prisma
    const users = await prisma.newUser.findMany({
      where: {
        role: {
          contains: filters.role,
          mode: "insensitive",
        },
        fullName: {
          contains: filters.fullName,
          mode: "insensitive",
        },
        division: {
          contains: filters.division,
          mode: "insensitive",
        },
        district: {
          contains: filters.district,
          mode: "insensitive",
        },
        upazila: {
          contains: filters.upazila,
          mode: "insensitive",
        },
        tunion: {
          contains: filters.tunion,
          mode: "insensitive",
        },
      },
    });

    // Log the fetched users for debugging
    console.log("Fetched users:", users);

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    return new Response(
      JSON.stringify({ message: "Error fetching users", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
