import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "Node.js",
        educator: "Dani",
        duration: 1,
    });

    CreateCourseService.execute({
        name: "Reactjs",
        educator: "Diego",
    });

    return response.send();
}