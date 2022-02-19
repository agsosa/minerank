import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('servers')
@Controller({
  version: '1',
  path: 'servers',
})
export class CommunityController {
  constructor(private readonly communitySerice: CommunityService) {}

  @Post()
  create(@Body() createCommunityDto: CreateServerDto) {
    return this.communitySerice.create(createCommunityDto);
  }

  @Get()
  findAll() {
    return this.communitySerice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.communitySerice.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCommunityDto: UpdateServerDto) {
    return this.communitySerice.update(+id, updateCommunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.communitySerice.remove(+id);
  }
}
