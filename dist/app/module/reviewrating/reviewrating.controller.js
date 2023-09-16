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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRatingController = void 0;
const reviewrating_service_1 = require("./reviewrating.service");
const insertIntiDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield reviewrating_service_1.reviewRatingService.insertIntoDb(req.body);
        res.send({
            success: true,
            statusCode: 200,
            message: 'ReviewRating created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Something Went Wrong',
            error,
        });
    }
});
const findAllReviewRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield reviewrating_service_1.reviewRatingService.getAllReviewRating();
        res.send({
            success: true,
            statusCode: 200,
            message: 'FindAll ReviewRating  fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Something Went Wrong',
            error,
        });
    }
});
const getSingleReviewRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield reviewrating_service_1.reviewRatingService.getSingleReviewRating(req.params.id);
        res.send({
            success: true,
            statusCode: 200,
            message: 'Single ReviewRating fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Something Went Wrong',
            error,
        });
    }
});
const updateReviewRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield reviewrating_service_1.reviewRatingService.updateReviewRating(req.params.id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: 'ReviewRating updated successfully!',
        data: result,
    });
});
const deleteReviewRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield reviewrating_service_1.reviewRatingService.deleteReviewRating(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: 'ReviewRating deleted successfully!',
        data: result,
    });
});
exports.reviewRatingController = {
    insertIntiDB,
    findAllReviewRating,
    getSingleReviewRating,
    updateReviewRating,
    deleteReviewRating,
};
