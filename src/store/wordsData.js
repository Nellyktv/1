import { makeAutoObservable,runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { inject } from "prompts";
// import words from './../Words.json';


 class WordsData {
    wordsChange=[];

constructor() {
    makeAutoObservable(this);
}
 


save=()=>{
this.wordsChange.push('Лена');
console.log(this.wordsChange);

}
// save = (engNewWord, transcriptionNewWord, rusNewWord) => {
//      words.concat({
//         // "id":newWordId,
//         "english": engNewWord,
//         "transcription": transcriptionNewWord,
//         "russian": rusNewWord,
//     }
//     )
// }

}

export default inject(({WordsData}) =>{
    const {wordsChange,save} = WordsData;
    return {
        wordsChange,save
    };
})(observer(WordsData));

