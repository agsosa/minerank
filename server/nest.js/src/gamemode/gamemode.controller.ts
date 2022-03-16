import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamemodeService } from './gamemode.service';
import { CreateGamemodeDto } from './dto/create-gamemode.dto';
import { UpdateGamemodeDto } from './dto/update-gamemode.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('gamemodes')
@Controller({
  version: '1',
  path: 'gamemodes',
})
export class GamemodeController {
  constructor(private readonly gamemodesService: GamemodeService) {}

  @Post()
  create(@Body() createGamemodeDto: CreateGamemodeDto) {
    return this.gamemodesService.create(createGamemodeDto);
  }

  @Get()
  findAll() {
    return this.gamemodesService.findAll();
  }

  @Get(':shortName')
  findOne(@Param('shortName') shortName: string) {
    return this.gamemodesService.findOne(shortName);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGamemodeDto: UpdateGamemodeDto) {
    return this.gamemodesService.update(+id, updateGamemodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamemodesService.remove(+id);
  }
}
