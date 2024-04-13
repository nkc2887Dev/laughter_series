"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = exports.seedRoles = void 0;
const user_1 = __importDefault(require("../../models/user"));
const role_1 = __importDefault(require("../../models/role"));
const seedRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rolesJSON = require("../../seeders/roles.json");
        Promise.all(rolesJSON.map((data) => __awaiter(void 0, void 0, void 0, function* () {
            let findRole = yield role_1.default.findOne({ code: data.code });
            if (!findRole) {
                yield role_1.default.create(data);
            }
        })));
        console.info("Roles seeded successfully! 👥");
        return true;
    }
    catch (error) {
        console.error("Error in seedRoles!", error);
        throw new Error(error);
    }
});
exports.seedRoles = seedRoles;
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminJSON = require("../../seeders/admin.json");
        Promise.all(adminJSON.map((data) => __awaiter(void 0, void 0, void 0, function* () {
            data.email = data.email.trim().toLowerCase();
            let roles = [];
            let findUser = yield user_1.default.findOne({ email: data.email });
            if (!findUser) {
                const findRole = yield role_1.default.findOne({ code: data.role });
                roles.push({ roleId: findRole._id });
                data.roles = roles;
                data.createdAt = new Date();
                yield user_1.default.create(data);
            }
        })));
        console.info("Admin seeded successfully! 🛡️");
        return true;
    }
    catch (error) {
        console.error("Error in seedAdmin!", error);
    }
});
exports.seedAdmin = seedAdmin;
// const seedSeries = async () => {
//   try {
//     const seriesGeneratorJSON = require("../seeders/seriesGenerator.json");
//     await Promise.all(
//       _.map(seriesGeneratorJSON, async (data) => {
//         let series = await dbService.getDocumentByQuery(seriesGenerator, { type: data.type })
//         if (series) {
//           await dbService.updateDocument(seriesGenerator, data._id, data, { updatedAt: new Date() });
//         } else {
//           await dbService.createDocument(seriesGenerator, data);
//         }
//       })
//     );
//     console.info("Series seeded successfully! 🚀");
//     return true;
//   } catch (error) {
//     console.error("Error in seedSeries!", error);
//   }
// };
// const seedMaster = async () => {
//   try {
//     const masterJSON = require("../seeders/masters.json");
//     masterJSON.forEach(async (data) => {
//       let findMaster = await Master.findOne({ code: data?.code });
//       if (!findMaster) {
//         await Master.create(data);
//       }
//       await Promise.all(_.map(data?.subMaster, async (subData) => {
//         let findSubMaster = await Master.findOne({ code: subData?.code });
//         if (!findSubMaster) {
//           await Master.create(subData);
//         }
//       }));
//     });
//     console.info("Master seeded successfully! 🧑‍💻");
//   } catch (error) {
//     console.error("Error in seedMaster!", error);
//   }
// };
// const seedSettings = async () => {
//   try {
//     const settingJSON = require("../seeders/settings.json");
//     await Promise.all(
//       _.map(settingJSON, async (data) => {
//         let setting = await dbService.getDocumentByQuery(Settings, { type: data.type });
//         if (!setting) {
//           data.url = data.url?.replaceAll('{{frontUrl}}', THIS.FRONT_URL);
//           data.details = data.details?.replaceAll('{{frontUrl}}', THIS.FRONT_URL);
//           await dbService.createDocument(Settings, data);
//         }
//       })
//     );
//     console.info("Settings seeded successfully! 🦾");
//     return true;
//   } catch (error) {
//     console.error("Error in seedSettings!", error);
//   }
// };
// const seedPages = async () => {
//   try {
//     const pagesJSON = require("../seeders/pages.json");
//     await Promise.all(
//       _.map(pagesJSON, async (data) => {
//         let widgets = JSON.parse(JSON.stringify(data?.widgets)) || [];
//         delete data?.widgets;
//         let page = await dbService.getDocumentByQuery(Page, { code: data.code });
//         if (!page) {
//           await dbService.createDocument(Page, data);
//         }
//         await Promise.all(_.map(widgets, async (widget) => {
//           let findWidget = await Widget.findOne({ code: widget?.code });
//           if (!findWidget) {
//             await Widget.create(widget);
//           }
//         }));
//       })
//     );
//     console.info("Pages and widgets seeded successfully! 📄");
//     return true;
//   } catch (error) {
//     console.error("Error in seedPages!", error);
//   }
// };
// const seedResumeTemplates = async () => {
//   try {
//     const resumeTemplatesJSON = require("../seeders/resumeTemplates.json");
//     await Promise.all(
//       _.map(resumeTemplatesJSON, async (data) => {
//         let template = await dbService.getDocumentByQuery(ResumeTemplates, { code: data.code });
//         if (!template) {
//           const updatedTemp = await generateResumeWithData(data.body);
//           const uploadedResume = await generatePdfAndUpload(updatedTemp, `${FILE_URI.RESUMES}${data.code}`, true);
//           data.imgUri = uploadedResume.uri;
//           data.tempType = TEMPLATES_TYPES.RESUME;
//           await dbService.createDocument(ResumeTemplates, data);
//         }
//       })
//     );
//     console.info("Resume templates seeded successfully! 📄");
//     return true;
//   } catch (error) {
//     console.error("Error in seedResumeTemplates!", error);
//   }
// };
