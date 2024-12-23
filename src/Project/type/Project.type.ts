import { TokenProps } from "../../Utils/type/UtilType";

export interface CreateProjectFunctionProps extends TokenProps {
  title: string;
  projectType?: {
    value: string;
    label: string;
  } | null;
}

export interface GetComponentListFunctionProps extends TokenProps {
  projectSeq: string;
}

export interface ComponentProps extends TokenProps {
  item: {
    projectSeq?: string;
    componentSeq?: string;
    data?: string;
    type?: string;
    i?: string;
    w: string;
    h: string;
    x: string;
    y: string;
  };
}

export interface LayoutInterface {
  projectSeq: string; // 프로젝트 ID
  componentSeq: string; // 컴포넌트 ID
  componentName: string; // 컴포넌트 이름
  componentData: string; // 컴포넌트 데이터
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string;
    maxH: 10;
    maxW: 10;
    minH: 2;
    minW: 3;
    isResizable: true;
    isDraggable: true;
    isBounded: false;
    resizeHandles: ["se", "sw"];
  };
}
