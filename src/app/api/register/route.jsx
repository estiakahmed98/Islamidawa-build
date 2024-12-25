import prisma from "../../../../prisma/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const {
    fullName,
    email,
    password,
    role,
    division,
    district,
    upazila,
    tunion,
    markaz,
    phoneNumber,
  } = await req.json();

  console.log("Received data:", {
    fullName,
    role,
    email,
    password,
    division,
    district,
    upazila,
    tunion,
    phoneNumber,
    markaz,
  });

  // Basic validation
  if (!fullName || !email || !password || !role) {
    return new Response("All fields are required", { status: 400 });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.newUser.create({
      data: {
        fullName,
        role,
        division,
        district,
        upazila,
        tunion,
        markaz,
        phoneNumber,
        email,
        password: hashedPassword,
      },
    });
    console.log("New ");
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("user Created Failed", { status: 500 });
  }
}
