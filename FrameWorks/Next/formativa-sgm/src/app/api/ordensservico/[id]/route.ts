import {
  deleteOrdemServico,
  getOneOrdemServico,
  updateOrdemServico,
} from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

// Interface para parâmetro de rota
interface Parametro {
  id: string;
}

// PATCH (Atualizar uma ordem de serviço)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Parametro }
) {
  try {
    const { id } = params;
    const data = await req.json();
    const ordemAtualizada = await updateOrdemServico(id, data);
    //quando a ordem não foi encontrada
    if (!ordemAtualizada) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //ordem foi encontrada e atualizada
    return NextResponse.json({ success: true, data: ordemAtualizada });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error });
  }
}

// GET (Buscar uma ordem de serviço pelo ID)
export async function GET({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    const ordem = await getOneOrdemServico(id);
    if (!ordem) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //ordem foi encontrada
    return NextResponse.json({ success: true, data: ordem });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error });
  }
}

// DELETE (Remover uma ordem de serviço pelo ID)
export async function DELETE({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    await deleteOrdemServico(id);
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
