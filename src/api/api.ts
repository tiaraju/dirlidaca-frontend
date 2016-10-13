/**
 * Created by tiaraju on 12/10/16.
 */
let problems = [{"id": 1, "name": "p1", "description": "problema 1"},
    {"id": 2, "name": "p2", "description": "problema 2"},
    {"id": 3, "name": "p3", "description": "problema 3"},
];

export class Api {

    latency = 200;

    getProblems() {
        return new Promise(resolve => {
            setTimeout(() => {
                let results = problems.map(x => {
                    return {
                        name: x.name,
                        description: x.description,
                        id: x.id
                    }
                });
                resolve(results);
            }, this.latency);
        });
    }
}