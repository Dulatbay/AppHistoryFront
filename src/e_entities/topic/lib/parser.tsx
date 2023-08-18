import {ReactNode} from "react";
import {MyStack} from "@/e_entities/topic/lib/components/MyStack";
import {MyContainer} from "@/e_entities/topic/lib/components/MyContainer";
import {Text} from "@/e_entities/topic/lib/components/Text";
import {ContentViewer} from "@/e_entities/topic/lib/components/ContentViewer";
import {ListViewer} from "@/e_entities/topic/lib/components/ListViewer";
import {MyImage} from "@/e_entities/topic/lib/components/MyImage";
import {IconNode} from "@/e_entities/topic/lib/components/IconNode";
import {Term} from "@/e_entities/topic/lib/components/Term";

const isShowComponentName = false
export const getComponent = (obj: any): ReactNode => {
    console.log(obj)
    if (obj == null) return;
    switch (obj.componentName) {
        case "Stack":
            return <>
                {isShowComponentName && obj.componentName}
                <MyStack key={obj.componentName} gap={obj.gap} isVertical={obj.isVertical} width={obj.width}
                         height={obj.height}>{obj.children && obj.children.map((childrenObj: any, index: number) =>
                    <div key={index}>{getComponent(childrenObj)}</div>
                )}</MyStack>
            </>
        case "Container":
            return <>
                {isShowComponentName && obj.componentName}
                <MyContainer key={obj.componentName} child={getComponent(obj.child)} outlinedType={obj.outlinedType}
                             borderColor={obj.borderColor} padding={obj.padding} margin={obj.margin} width={obj.width}
                             height={obj.height} isLow={obj.isLow} backgroundColor={obj.backgroundColor}/>
            </>
        case "Text":
            return <>
                {isShowComponentName && obj.componentName}
                <Text key={obj.componentName} childTextHTML={obj.childTextHTML} textType={obj.textType}
                      textColor={obj.textColor}/>
            </>
        case "ContentViewer":
            return <>
                {isShowComponentName && obj.componentName}
                <ContentViewer key={obj.componentName} text={getComponent(obj.text)} gap={obj.gap}
                               child={getComponent(obj.child)} titleBottomBorder={obj.titleBottomBorder}
                               titleBottomColor={obj.titleBottomColor} width={obj.width} height={obj.height}/>
            </>
        case "ListViewer":
            return <>
                {isShowComponentName && obj.componentName}
                <ListViewer key={obj.componentName} gap={obj.gap}
                            children={obj.children && obj.children.map((childrenObj: any, index: number) => <div
                                key={index}>{getComponent(childrenObj)}</div>)}
                            isVertical={obj.isVertical} padding={obj.padding} margin={obj.margin} width={obj.width}
                            height={obj.height}/>
            </>
        case "Image":
            return <>
                {isShowComponentName && obj.componentName}
                <MyImage key={obj.componentName} imageUrl={obj.imageUrl} title={obj.title} size={obj.size}
                         width={obj.width}/>
            </>
        case "IconNode":
            return <>
                {isShowComponentName && obj.componentName}
                <IconNode gap={obj.gap} iconName={obj.iconName} node={getComponent(obj.node)}
                          iconColor={obj.iconColor}/>
            </>
        case "Term":
            return <>
                {isShowComponentName && obj.componentName}
                <Term termText={obj.termText} description={obj.description} isWithHyphen={obj.isWithHyphen}/>
            </>
        default:
            console.log(obj.componentName, "NOT FOUND")
            return <></>
    }
}