import { Animated, StyleSheet } from "react-native";
import React from "react";
import Concepto from "./Concepto";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import defaultStyles from "@/constants/DefaultStyles";
import NoDataConceptos from "./NoDataConceptos";
import { TIPO_CONCEPTO } from "@/constants/TipoConceptoEnum";

export interface DataProps {
  tipoConcepto: TIPO_CONCEPTO;
  // TODO: Concentrar interfaces en otras clases
  data: {
    id: string;
    concepto: string;
    descripcion: string;
    categoria: string;
    monto: number;
  }[];
}

const ListConceptosIngresos = ({ data, tipoConcepto }: DataProps) => {
  return (
    <Animated.FlatList
      renderScrollComponent={(props) => (
        <KeyboardAwareScrollView
          bottomOffset={50}
          style={[defaultStyles.principalFondo]}
          contentContainerStyle={[defaultStyles.principalFondo]}
          {...props}
        />
      )}
      // bounces={false}
      data={data}
      keyExtractor={(item) => item.id}
      style={listaConceptosIngresosStyles.bodyIngresosListadoContainer}
      renderItem={({ item }) => (
        <Concepto
          id={item.id}
          concepto={item.concepto}
          descripcion={item.descripcion}
          categoria={item.categoria}
          monto={item.monto}
        />
      )}
      ListEmptyComponent={<NoDataConceptos tipoConcepto={tipoConcepto} />}
    />
  );
};

export default ListConceptosIngresos;

const listaConceptosIngresosStyles = StyleSheet.create({
  bodyIngresosListadoContainer: {
    paddingTop: 20,
    width: "100%",
    height: "60%", // TODO: Corregir espacio disponible para botoneras, esto cambiará de un telefono a otro
  },
});
