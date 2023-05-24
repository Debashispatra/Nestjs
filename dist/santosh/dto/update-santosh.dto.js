"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSantoshDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_santosh_dto_1 = require("./create-santosh.dto");
class UpdateSantoshDto extends (0, mapped_types_1.PartialType)(create_santosh_dto_1.CreateSantoshDto) {
}
exports.UpdateSantoshDto = UpdateSantoshDto;
//# sourceMappingURL=update-santosh.dto.js.map