import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import * as $ from 'backbone';
// @ts-ignore
const joint = require('jointjs/dist/joint.js');

@Component({
  selector: 'app-joint-graph',
  templateUrl: './joint-graph.component.html',
  styleUrls: ['./joint-graph.component.scss']
})
export class JointGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:new-parens
    const graph = new joint.dia.Graph;

    const paper = new joint.dia.Paper({
      el: jQuery('#paper'),
      width: 1000,
      height: 1000,
      model: graph,
      gridSize: 1
    });

    const rect = new joint.shapes.basic.Rect({
      position: { x: 100, y: 30 },
      size: { width: 200, height: 30 },
      attrs: { rect: { fill: '#222' }, text: { text: 'Ген. директор', fill: 'white' } }
    });

    const rect2 = new joint.shapes.basic.Rect({
      position: { x: 150, y: 100 },
      size: { width: 200, height: 30 },
      attrs: { rect: { fill: '#222' }, text: { text: 'Директор', fill: 'white' } }
    });

    const rect3 = new joint.shapes.basic.Rect({
      position: { x: 200, y: 170 },
      size: { width: 200, height: 30 },
      attrs: { rect: { fill: '#222' }, text: { text: 'Управляющий', fill: 'white' } }
    });

    const rect4 = new joint.shapes.basic.Rect({
      position: { x: 250, y: 240 },
      size: { width: 200, height: 30 },
      attrs: { rect: { fill: '#222' }, text: { text: 'Старший менеджер', fill: 'white' } }
    });

    const rect5 = new joint.shapes.basic.Rect({
      position: { x: 300, y: 310 },
      size: { width: 200, height: 30 },
      attrs: { rect: { fill: '#222' }, text: { text: 'Менеджер', fill: 'white' } }
    });

    // const rect6 = rect.clone() as joint.shapes.basic.Rect;

    const link = new joint.dia.Link({
      source: { id: rect.id },
      target: { id: rect5.id }
    });


    graph.addCells([rect, rect2, rect3, rect4, rect5, link]);
  }

}
