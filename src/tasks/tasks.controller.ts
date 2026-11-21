import { Controller, Get, Param, NotFoundException, Post, Body, Patch } from '@nestjs/common';
import type { ITask } from './tasks.model.js';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './create-task.dto.js';
import { FindOneParams } from './find-one.params.js';
import { UpdateTaskStatusDto } from './update-task-status.dto.js';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get()
    public findAll(): ITask[] {
        return this.tasksService.findAll();
    }

    @Get('/:id')
    public findOne(@Param() params: FindOneParams): ITask {
       return this.findOneOrFail(params.id);
    }


    @Post()
    public create(@Body() createTaskDto: CreateTaskDto): ITask {
        return this.tasksService.create(createTaskDto);
    }


    @Patch('/:id/status')
    public updateTaskStatus(
        @Param() params: FindOneParams,
        @Body() body: UpdateTaskStatusDto,
    ): ITask {
       const task = this.findOneOrFail(params.id);
       task.status = body.status;
       return task;
    }
    private findOneOrFail(id: string): ITask {
        const task = this.tasksService.findOne(id);

        if (!task) {
          throw new NotFoundException();
        
        }
        return task;
  
    }
    }
