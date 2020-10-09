CREATE SEQUENCE contact_tbl_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
	
CREATE TABLE contact_tbl
(
    id bigint NOT NULL DEFAULT nextval('contact_tbl_id_seq'::regclass),
    name character varying(255) NOT NULL,
    CONSTRAINT contact_tbl_pkey PRIMARY KEY (id)
);
	
CREATE SEQUENCE phone_tbl_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
	
CREATE TABLE phone_tbl
(
    id bigint NOT NULL DEFAULT nextval('phone_tbl_id_seq'::regclass),
    "number" bigint NOT NULL,
    type integer,
    contactid bigint NOT NULL,
    CONSTRAINT phone_tbl_pkey PRIMARY KEY (id),
    CONSTRAINT fk_contact_tbl FOREIGN KEY (contactid)
        REFERENCES public.contact_tbl (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
	
CREATE SEQUENCE user_tbl_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
	
CREATE TABLE user_tbl
(
    id bigint NOT NULL DEFAULT nextval('user_tbl_id_seq'::regclass),
    active boolean NOT NULL,
    birthdate timestamp without time zone NOT NULL,
    email character varying(255) NOT NULL,
    enabled boolean NOT NULL,
    password character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    CONSTRAINT user_tbl_pkey PRIMARY KEY (id),
    CONSTRAINT uk_user_tbl_user UNIQUE (username)
);
	
CREATE SEQUENCE verificationtoken_tbl_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
	
CREATE TABLE verificationtoken_tbl
(
    id bigint NOT NULL DEFAULT nextval('verificationtoken_tbl_id_seq'::regclass),
    expirydate timestamp without time zone,
    token character varying(255) COLLATE pg_catalog."default",
    user_id bigint,
    CONSTRAINT verificationtoken_tbl_pkey PRIMARY KEY (id),
    CONSTRAINT fk_user_tbl FOREIGN KEY (user_id)
        REFERENCES public.user_tbl (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);