// app/api/signup/route.js
import prisma from "../../../../prisma/prisma";

export async function POST(req) {
  const {
    tahajjud,
    ayat,
    zikir,
    ishraq,
    jamat,
    sirat,
    Dua,
    ilm,
    tasbih,
    dayeeAmol,
    amoliSura,
    ayamroja,
    hijbulBahar,
  } = await req.json();

  // Basic validation
  if (
    !tahajjud ||
    !ayat ||
    !zikir ||
    !ishraq ||
    !jamat ||
    !sirat ||
    !Dua ||
    !ilm ||
    !tasbih ||
    !dayeeAmol ||
    !amoliSura ||
    !ayamroja ||
    !hijbulBahar
  ) {
    return new Response("All fields are required", { status: 400 });
  }

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const amolidata = await prisma.amoliMuhasabaData.create({
      data: {
        tahajjud,
        ayat,
        zikir,
        ishraq,
        jamat,
        sirat,
        Dua,
        ilm,
        tasbih,
        dayeeAmol,
        amoliSura,
        ayamroja,
        hijbulBahar,
      },
    });
    console.log(amolidata);
    return new Response(JSON.stringify(amolidata), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("user Created Failed", { status: 500 });
  }
}
