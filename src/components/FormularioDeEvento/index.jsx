import "./formulario-de-evento.estilos.css";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeDoEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataDoEvento">Data do evento?</Label>
          <CampoDeEntrada type="date" id="data" placeholder="XX/XX/XXXX" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaDoEvento">Tema do evento?</Label>
          <ListaSuspensa></ListaSuspensa>
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
