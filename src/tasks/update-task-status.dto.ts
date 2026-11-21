import { IsEnum, IsNotEmpty } from "class-validator";
import { TaskStatus } from "./tasks.model.js";

export class  UpdateTaskStatusDto {
 @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}