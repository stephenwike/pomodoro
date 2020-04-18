export class PomodoroEntity {
    task: string;
    tasktype: string;
    project: string;
    code: string;
    created: Date;

    public constructor(init?:Partial<PomodoroEntity>) {
        Object.assign(this, init);
    }
}
