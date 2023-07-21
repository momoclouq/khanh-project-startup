package edu.kits.finalproject;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Domain.User;
import edu.kits.finalproject.Model.CourseDto;
import edu.kits.finalproject.Model.UserDto;
import edu.kits.finalproject.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FinalProjectApplication {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

//    Global CORS configuration
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/admin/courses").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/categoties").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/courses/{id}").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/get-tutor-from-course/{id}").allowedOrigins("http://localhost:3000");
                //registry.addMapping("/admin/add-order").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/order/{orderId}").allowedMethods("GET", "POST", "PUT", "DELETE").allowedOrigins("http://localhost:3000");
            }
        };
    }

    public static void main(String[] args) {

        SpringApplication.run(FinalProjectApplication.class, args);

    }
}
