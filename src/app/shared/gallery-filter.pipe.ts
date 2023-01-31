import { Pipe, PipeTransform } from "@angular/core";
import { GalleryItem } from "./gallery.service";

@Pipe({
    name: 'galleryFilter'
})

export class GalleryFilterPipe implements PipeTransform {
    transform(gallery: GalleryItem[], search: string = ''): GalleryItem[] {
        if (!search.trim()) {
            return gallery
        }
        return gallery.filter(breed => {
            return breed.id?.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
        })
    }

}