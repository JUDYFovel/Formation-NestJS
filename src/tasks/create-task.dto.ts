import { TaskStatus } from "./tasks.model.js";
import { IsNotEmpty, IsString, IsEnum } from "class-validator";

export class CreateTaskDto {
 
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
   description: string;

  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;
    }
