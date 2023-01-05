package com.xcenter.infra.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Bean(name = "dbUserService")
    @Primary
    public DataSource createUserServiceDataSource(){
        DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("com.mysql.cj.jdbc.Driver");
        dataSourceBuilder.url("jdbc:mysql://localhost:3306/x_center");
        dataSourceBuilder.username("root");
        dataSourceBuilder.password("songlong");
        return dataSourceBuilder.build();
    }

    @Bean(name = "dbSystemService")
    public DataSource createSystemServiceDataSource(){
        DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("com.mysql.cj.jdbc.Driver");
        dataSourceBuilder.url("jdbc:mysql://localhost:3306/x_center_user");
        dataSourceBuilder.username("root");
        dataSourceBuilder.password("songlong");
        return dataSourceBuilder.build();
    }

    @Autowired
    @Bean(name = "jdbcUserService")
    public JdbcTemplate createJdbcTemplate_UserService(@Qualifier("dbUserService") DataSource userServiceDS) {
        return new JdbcTemplate(userServiceDS);
    }
    @Autowired
    @Bean(name = "jdbcSystemService")
    public JdbcTemplate createJdbcTemplate_SystemService(@Qualifier("dbSystemService") DataSource systemServiceDS) {
        return new JdbcTemplate(systemServiceDS);
    }

}
