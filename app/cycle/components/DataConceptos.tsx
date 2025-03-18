import { View, StyleSheet } from "react-native";
import React from "react";
import Filter from "./Filter";
import ListConceptosIngresos, { DataProps } from "./ListConceptosIngresos";

const DataConceptos = ({ data, tipoConcepto }: DataProps) => {
  return (
    <View>
      <Filter tipoConcepto={tipoConcepto} />
      <ListConceptosIngresos data={data} tipoConcepto={tipoConcepto} />
    </View>
  );
};

export default DataConceptos;

const dataConceptosStyles = StyleSheet.create({});
