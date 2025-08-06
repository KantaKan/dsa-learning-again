const fs = require("fs");

const members1 = JSON.parse(fs.readFileSync("data.json", "utf-8"));

async function deleteAllMembers(members) {
  for (const member of members) {
    try {
      const res = await fetch(`com/member/${member.id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer YOUR_TOKEN_HERE",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log(`✅ Deleted ${member.name} (${member.id})`);
      } else {
        console.warn(`❌ Failed ${member.name}: Status ${res.status}`);
      }
    } catch (err) {
      console.error(`💥 Error deleting ${member.name}:`, err.message);
    }
  }

  console.log("🎉 ลบทั้งหมดเสร็จแล้ว!");
}

deleteAllMembers(members1);
