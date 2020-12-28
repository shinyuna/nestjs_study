import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { throws } from 'assert';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.movieService.deleteOne(id);
  }

  @Patch('/:id')
  path(@Param('id') id: string, @Body() updateData) {
    return {
      updateMovie: id,
      ...updateData,
    };
  }
}
