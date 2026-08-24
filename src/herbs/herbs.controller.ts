import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Param,
} from '@nestjs/common';

import { HerbsService } from './herbs.service';

@Controller('herbs')
export class HerbsController {
    constructor(
        private readonly herbsService: HerbsService,
    ) {}

    @Get()
    findAll() {
        return this.herbsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.herbsService.findOne(id);
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

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.herbsService.remove(id);
    }
}

