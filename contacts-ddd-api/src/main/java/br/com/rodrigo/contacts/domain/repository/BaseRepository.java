package br.com.rodrigo.contacts.domain.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

@NoRepositoryBean
public interface BaseRepository<E> extends CrudRepository<E, Long>, PagingAndSortingRepository<E, Long> {

}
