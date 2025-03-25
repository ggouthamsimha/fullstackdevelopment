package com.example.FSD_1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@ToString
@Data
@Entity
@Table(name = "employee") // Changed table name to "employee"
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Getter
    private String name;
    // ✅ Manually added getter and setter methods
    @Setter
    @Getter
    private String email;
    @Setter
    @Getter
    private String password;
    @Setter
    @Getter
    private String address;

}
