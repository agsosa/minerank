import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { ApiTags } from '@nestjs/swagger';
import { SearchCommunityDto } from './dto/search-community.dto';
import { FindAllCommunitiesDto } from './dto/find-all-communities.dto';

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
  findAll(@Query() { page, limit }: FindAllCommunitiesDto) {
    return this.communityService.findAll(page, limit);
  }

  @Post('/search')
  @HttpCode(200)
  search(@Body() searchCommunityDto: SearchCommunityDto) {
    return this.communityService.search(searchCommunityDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.communityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCommunityDto: UpdateCommunityDto) {
    return this.communityService.update(+id, updateCommunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.communityService.remove(+id);
  }
}
