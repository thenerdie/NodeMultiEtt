import Player from './player';

import { ChartMsg } from './messages';

class Chart {
  title: string;

  subtitle: string;

  artist: string;

  filehash: string;

  pickedBy: string;

  meter: number;

  difficulty: number;

  rate: number;

  chartkey: string;

  constructor(message: ChartMsg, player: Player) {
    this.title = message.title;
    this.subtitle = message.subtitle;
    this.artist = message.artist;
    this.filehash = message.filehash;
    this.chartkey = message.chartkey;
    this.rate = message.rate;
    this.difficulty = message.difficulty;
    this.meter = message.meter;
    this.pickedBy = player.user;
  }
}

export { Chart as default };
