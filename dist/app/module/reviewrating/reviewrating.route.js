"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRatingRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const reviewrating_controller_1 = require("./reviewrating.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), reviewrating_controller_1.reviewRatingController.insertIntiDB);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), reviewrating_controller_1.reviewRatingController.findAllReviewRating);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), reviewrating_controller_1.reviewRatingController.getSingleReviewRating);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), reviewrating_controller_1.reviewRatingController.updateReviewRating);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), reviewrating_controller_1.reviewRatingController.deleteReviewRating);
exports.reviewRatingRouter = router;
