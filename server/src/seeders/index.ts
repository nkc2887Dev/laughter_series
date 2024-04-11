import { seedRoles, seedAdmin } from "../services/seeder/seeder";

async function initSeed() {
  try {
    await seedRoles();
    await seedAdmin();
    // await service.seedSeries();
    // await service.seedMaster();
    // await service.seedPages();
    // await service.seedSettings();
    // await service.seedResumeTemplates();
    // await seedEmailTemplates();
    // await notificationService.seedNotifications();
  } catch (error) {
    console.error("Error - Seed data failed!", error);
  }
}

export = initSeed;
