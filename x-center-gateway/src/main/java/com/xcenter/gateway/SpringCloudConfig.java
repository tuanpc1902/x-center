package com.xcenter.gateway;

import org.springframework.context.annotation.Configuration;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@Configuration
public class SpringCloudConfig {
    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder){
        return builder.routes()
                .route(r -> r.path("/webservice/**")
                        .uri("lb://XCENTER-WEBSERVICE")
                )
                .route(r -> r.path("/authentication")
                        .uri("lb://XCENTER-LOGIN")
                )
                .route(r -> r.path("/infra")
                        .uri("lb://XCENTER-INFRA")
                )
                .build();
    }
}
