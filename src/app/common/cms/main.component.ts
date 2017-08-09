import { Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver,Compiler} from '@angular/core';
import { HomeCateComponent } from './home-cate.component';
import { HomeFeedbackComponent } from './home-feedback.component';
import { HomeFollowComponent } from './home-follow.component';
import { InstallBoxComponent } from './install-app.component';
import { NewsBoxComponent } from './news-box.component';
import { SearchBarComponent } from './search-bar.component';
import { TipBoxComponent } from './tip-box.component';
import { TopProductsComponent } from './top-products.component';
import { ProductsBoxComponent } from './productsbox.component';


@Component({
    selector: 'dynamic-component',
    entryComponents: [
        HomeCateComponent,
        HomeFeedbackComponent,
        HomeFollowComponent,
        InstallBoxComponent,
        NewsBoxComponent,
        SearchBarComponent,
        TipBoxComponent,
        TopProductsComponent,
        ProductsBoxComponent
    ], // Reference to the components must be here in order to dynamically create them
    template:`<div #dynamicComponentContainer></div>`,
})


export class MainComponent {
    currentComponent : any = null;
    typeMap = {
        'home-cate' : HomeCateComponent,
        'home-feedback' : HomeFeedbackComponent,
        'home-follow' : HomeFollowComponent,
        'install-box' : InstallBoxComponent,
        'news-box' : NewsBoxComponent,
        'search-bar' : SearchBarComponent,
        'tip-box' : TipBoxComponent,
        'top-products' : TopProductsComponent,
        'block-products-box' : ProductsBoxComponent
    };
    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    // component: Class for the component you want to create
    // inputs: An object with key/value pairs mapped to input name/input value
    @Input() set componentData(data: {template_data: any,position: any}) {
        if (!data) {
            return;
        }
        if (typeof this.typeMap[data.template_data.alias] == 'undefined') {
            return;
        }

        // Inputs need to be in the following format to be resolved properly
        let inputProviders = Object.keys(data).map((inputName) => {return {provide: 'data', useValue: data};});
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        // We create an injector out of the data we want to pass down and this components injector
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        let comp = this.typeMap[data.template_data.alias];
        // We create a factory out of the component we want to create
        let factory = this.resolver.resolveComponentFactory(comp);

        // We create the component using the factory and the injector
        let component = factory.create(injector);

        // We insert the component into the dom container
        this.dynamicComponentContainer.insert(component.hostView);

        // We can destroy the old component is we like by calling destroy
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }

        this.currentComponent = component;
    }

    constructor(private resolver: ComponentFactoryResolver) {

    }
}

