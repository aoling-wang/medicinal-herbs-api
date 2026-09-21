import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Query,
    Put,
    UseGuards,
} from '@nestjs/common';

import { HerbsService } from './herbs.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('herbs')
export class HerbsController {
    constructor(
        private readonly herbsService: HerbsService,
    ) {}

    @Get()
    findAll() {
        return this.herbsService.findAll();
    }

    @Get('search')
    search(
        @Query('name') name?: string,
        @Query('medicinalUses') medicinalUse?: string,
        @Query('contraindications') contraindication?: string,
    ) {
        return this.herbsService.search({ name, medicinalUse, contraindication });
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.herbsService.findOne(id);
    }

    @Get('targetSystem/:targetSystem')
    findByTargetSystem(@Param('targetSystem') targetSystem: string) {
        return this.herbsService.findByTargetSystem(targetSystem);
    }

    @Get('useableParts/:useablePart')
    findByUseablePart(@Param('useablePart') useablePart: string) {
        return this.herbsService.findByUseablePart(useablePart);
    }

    @Get('preparationMethods/:preparationMethod')
    findByPreparationMethod(@Param('preparationMethod') preparationMethod: string) {
        return this.herbsService.findByPreparationMethod(preparationMethod);
    }

    @Post()
    create(
        @Body() body: {
            name: string; 
            activeCompounds: string[]; 
            medicinalUses: string[]; 
            targetSystem: string[]; 
            useableParts: string[]; 
            preparationMethods: string[]; 
            interactions: { compound: string; effect: string }[]; 
            contraindications: string[] 
        },
    ) {
        return this.herbsService.create(
            {
                name: body.name,
                activeCompounds: body.activeCompounds,
                medicinalUses: body.medicinalUses,
                targetSystem: body.targetSystem,
                useableParts: body.useableParts,
                preparationMethods: body.preparationMethods,
                interactions: body.interactions,
                contraindications: body.contraindications
            }
        );
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() body: {
            name?: string; 
            activeCompounds?: string[]; 
            medicinalUses?: string[]; 
            targetSystem?: string[]; 
            useableParts?: string[]; 
            preparationMethods?: string[]; 
            interactions?: { compound: string; effect: string }[]; 
            contraindications?: string[] 
        },
    ) {
        return this.herbsService.update(id, body);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.herbsService.remove(id);
    }
}

