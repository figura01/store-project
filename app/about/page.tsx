import { prisma } from "@/utils/db";

const AboutPage = async () => {
  const profile = await prisma.testProfile.create({
    data: { name: "Test User" },
  });
  const users = await prisma.testProfile.findMany();

  return (
    <div>
      <h2>About</h2>
      {users.map((user: { id: string; name: string }) => (
        <p key={user.id}>
          {user.name} (ID: {user.id})
        </p>
      ))}
    </div>
  );
};

export default AboutPage;
