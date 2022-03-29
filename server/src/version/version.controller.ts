import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionService } from './version.service';

@ApiTags('versions')
@Controller({
  version: '1',
  path: 'versions',
})
export class VersionController {
  constructor(private readonly versionsService: VersionService) {}

  @Post()
  create(@Body() createVersionDto: CreateVersionDto) {
    return this.versionsService.create(createVersionDto);
  }

  @Get()
  findAll() {
    return this.versionsService.findAll();
  }

  @Get(':label')
  findOne(@Param('label') label: string) {
    return this.versionsService.findOne(label);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVersionDto: UpdateVersionDto) {
    return this.versionsService.update(+id, updateVersionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versionsService.remove(+id);
  }
}
