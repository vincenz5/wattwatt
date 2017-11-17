

export class Model {
  name: string;
  type: string;
  // tslint:disable-next-line:max-line-length
  design: Array<{ documentation: boolean, connection: string, nodes: Array<{ name: string, image: string}> }>;
  }


  export const myModel = [{
    name: 'Process model',
    type: 'vac',
    design: [{
      'documentation': false,
      'connection': `
          <polyline id="Path-5" stroke="#080808" points="32 36 32 49.0384048 36.0192483 45.0191565"></polyline>
          <polyline id="Path-5" stroke="#080808" points="32 191 32 204.038405 36.0192483 200.019157"></polyline>
          <polyline id="Path-5" stroke="#080808" points="33 87 33 100.038405 37.0192483 96.0191565"></polyline>
          <polyline id="Path-5" stroke="#080808" points="33 137 33 150.038405 37.0192483 146.019157"></polyline>
          <polyline id="Path-6" stroke-opacity="0.9" stroke="#000000" points="67 171 74 171 74 159 81 159"></polyline>
          `,
      'nodes': [{
        name: 'event',
        image: ` <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                <rect stroke="#1D1D1D" stroke-width="1" x="4.5" y="52.5" width="59" height="33" rx="6"></rect>
              `
      },
      {
        name: 'event',
        image: `
                <polygon id="Path-7" stroke="#000000" points="5 0 60.0363516 0 65 17 60.0363516 35 5 35 0 17"></polygon>
                `
      },
      {
        name: `             <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                <rect stroke="#1D1D1D" stroke-width="1" x="4.5" y="52.5" width="59" height="33" rx="6"></rect>`
      }
      ]
    }]
  },
  {
    name: 'sd'
  }];
