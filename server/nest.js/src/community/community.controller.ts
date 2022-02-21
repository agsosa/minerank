import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('communities')
@Controller({
  version: '1',
  path: 'communities',
})
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post()
  create(@Body() createCommunityDto: CreateCommunityDto) {
    return this.communityService.create(createCommunityDto);
  }

  @Get()
  findAll() {
    return this.communityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.communityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCommunityDto: UpdateServerDto) {
    return this.communityService.update(+id, updateCommunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.communityService.remove(+id);
  }
}
