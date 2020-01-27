import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    //styles: [` .exemplo { 
    //                        background-color: green;
    //                        color: white
    //                    } `
    //        ]
    styleUrls: ['./topo.component.scss']
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês';
}