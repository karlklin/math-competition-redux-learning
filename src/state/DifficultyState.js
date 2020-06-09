import {action, observable} from "mobx";

class DifficultyState {
    @observable difficulty = 3;
    difficulties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    @action updateDifficulty = num => {
        this.difficulty = num;
    };
}

export const difficultyState = new DifficultyState();