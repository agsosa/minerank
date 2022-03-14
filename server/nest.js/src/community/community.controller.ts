import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindCommunitiesDto } from './dto/find-communities.dto';

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

  @Post('/search')
  @HttpCode(200)
  findAll(
    @Body()
    { page, limit, filter, includeLatest, includeUnapproved, separateFeatured }: FindCommunitiesDto,
  ) {
    console.log({ page, limit, filter, includeLatest, includeUnapproved, separateFeatured })
    return this.communityService.find({
      page,
      limit,
      filter,
      includeLatest,
      includeUnapproved,
      separateFeatured,
    });
  }

  @Get('/shortnames')
  async findAllShortNames() {
    return this.communityService.findShortNames();
  }

  @Get(':shortName')
  findOne(@Param('shortName') shortName: string) {
    return this.communityService.findOne(shortName);
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
