export class VampiroPontoEnum {
    public static PADRAO: VampiroPontoEnum = new VampiroPontoEnum ([]);

    public static PADRAO1: VampiroPontoEnum = new VampiroPontoEnum (['Força', 'Destreza', 'Vigor']);

    public static PADRAO2: VampiroPontoEnum = new VampiroPontoEnum (['Carisma', 'Manipulação', 'Autocontrole']);

    public static PADRAO3: VampiroPontoEnum = new VampiroPontoEnum (['Inteligência', 'Raciocínio', 'Determinação']);

    public static PADRAO4: VampiroPontoEnum = new VampiroPontoEnum (['Armas Brancas', 'Armas de fogo', 'Atletismo']);

    public static PADRAO5: VampiroPontoEnum = new VampiroPontoEnum (['Briga', 'Condução', 'Furtividade']);

    public static PADRAO6: VampiroPontoEnum = new VampiroPontoEnum (['Ladroagem', 'Ofícios', 'Sobrevivência']);

    public static PADRAO7: VampiroPontoEnum = new VampiroPontoEnum (['Empatia com Animais', 'Etiqueta', 'Intimidação']);

    public static PADRAO8: VampiroPontoEnum = new VampiroPontoEnum (['Liderança', 'Manha', 'Performance']);

    public static PADRAO9: VampiroPontoEnum = new VampiroPontoEnum (['Persuasão', 'Sagacidade', 'Subterfúgio']);

    public static PADRAO10: VampiroPontoEnum = new VampiroPontoEnum (['Ciência', 'Erudição', 'Finanças']);

    public static PADRAO11: VampiroPontoEnum = new VampiroPontoEnum (['Investigação', 'Medicina', 'Ocultismo']);

    public static PADRAO12: VampiroPontoEnum = new VampiroPontoEnum (['Percepção', 'Política', 'Tecnologia']);

    constructor (private _atributos:Array<string>) {}

    public get atributos():Array<string> {
        return this._atributos;
    }

}