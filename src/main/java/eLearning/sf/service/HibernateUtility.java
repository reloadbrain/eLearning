package eLearning.sf.service;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class HibernateUtility {

	private static final SessionFactory sessionFactory = buildSessionFactory();
	
	private static SessionFactory buildSessionFactory() {
		Configuration configuration = new Configuration();
		configuration.configure();
		
		ServiceRegistry serviceReg = new StandardServiceRegistryBuilder()
				.applySettings(configuration.getProperties())
				.build();
		
		SessionFactory sessFac = configuration.buildSessionFactory(serviceReg);
		
		return sessFac;
	}
	
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}
}
