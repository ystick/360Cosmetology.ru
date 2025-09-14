import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BlogBodyDynamicZoneInput: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  NovostiBodyDynamicZoneInput: { input: any; output: any; }
  OborudovanieBodyDynamicZoneInput: { input: any; output: any; }
  RezultatyRabotyContentDynamicZoneInput: { input: any; output: any; }
  UslugaBodyDynamicZoneInput: { input: any; output: any; }
};

export type Abonementy = {
  readonly __typename?: 'Abonementy';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['JSON']['output'];
  readonly documentId: Scalars['ID']['output'];
  readonly mainImage: UploadFile;
  readonly order: Scalars['Int']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly slug: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type AbonementyEntityResponseCollection = {
  readonly __typename?: 'AbonementyEntityResponseCollection';
  readonly nodes: ReadonlyArray<Abonementy>;
  readonly pageInfo: Pagination;
};

export type AbonementyFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<AbonementyFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<JsonFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<AbonementyFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<AbonementyFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type AbonementyInput = {
  readonly description: InputMaybe<Scalars['JSON']['input']>;
  readonly mainImage: InputMaybe<Scalars['ID']['input']>;
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type Akczii = {
  readonly __typename?: 'Akczii';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly dateExpired: Maybe<Scalars['Date']['output']>;
  readonly dateStart: Maybe<Scalars['Date']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly longDescription: Maybe<Scalars['String']['output']>;
  readonly mainImage: UploadFile;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly shortDescription: Maybe<Scalars['String']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type AkcziiEntityResponseCollection = {
  readonly __typename?: 'AkcziiEntityResponseCollection';
  readonly nodes: ReadonlyArray<Akczii>;
  readonly pageInfo: Pagination;
};

export type AkcziiFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<AkcziiFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly dateExpired: InputMaybe<DateFilterInput>;
  readonly dateStart: InputMaybe<DateFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly longDescription: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<AkcziiFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<AkcziiFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly shortDescription: InputMaybe<StringFilterInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type AkcziiInput = {
  readonly dateExpired: InputMaybe<Scalars['Date']['input']>;
  readonly dateStart: InputMaybe<Scalars['Date']['input']>;
  readonly longDescription: InputMaybe<Scalars['String']['input']>;
  readonly mainImage: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly shortDescription: InputMaybe<Scalars['String']['input']>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type Blog = {
  readonly __typename?: 'Blog';
  readonly author: ComponentSharedAvtor;
  readonly body: ReadonlyArray<Maybe<BlogBodyDynamicZone>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly datePubpublished: Scalars['Date']['output'];
  readonly description: Maybe<Scalars['JSON']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly mainImage: UploadFile;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly slug: Scalars['String']['output'];
  readonly tags: Maybe<ReadonlyArray<Maybe<ComponentSharedObshhee>>>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type BlogTagsArgs = {
  filters: InputMaybe<ComponentSharedObshheeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogBodyDynamicZone = ComponentBlogIzobrazhenieNaVsyuShirinuKontejnera | ComponentBlogTekstovoePole | ComponentBlogTekstovoePoleSBokovojLiniej | ComponentBlogTekstovoePoleVBelomBloke | Error;

export type BlogEntityResponseCollection = {
  readonly __typename?: 'BlogEntityResponseCollection';
  readonly nodes: ReadonlyArray<Blog>;
  readonly pageInfo: Pagination;
};

export type BlogFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<BlogFiltersInput>>>;
  readonly author: InputMaybe<ComponentSharedAvtorFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly datePubpublished: InputMaybe<DateFilterInput>;
  readonly description: InputMaybe<JsonFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<BlogFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<BlogFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly tags: InputMaybe<ComponentSharedObshheeFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  readonly author: InputMaybe<ComponentSharedAvtorInput>;
  readonly body: InputMaybe<ReadonlyArray<Scalars['BlogBodyDynamicZoneInput']['input']>>;
  readonly datePubpublished: InputMaybe<Scalars['Date']['input']>;
  readonly description: InputMaybe<Scalars['JSON']['input']>;
  readonly mainImage: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly tags: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedObshheeInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentBlogIzobrazhenieNaVsyuShirinuKontejnera = {
  readonly __typename?: 'ComponentBlogIzobrazhenieNaVsyuShirinuKontejnera';
  readonly content: UploadFile;
  readonly id: Scalars['ID']['output'];
};

export type ComponentBlogTeg = {
  readonly __typename?: 'ComponentBlogTeg';
  readonly id: Scalars['ID']['output'];
  readonly tegs: ReadonlyArray<Maybe<ComponentSharedObshhee>>;
};


export type ComponentBlogTegTegsArgs = {
  filters: InputMaybe<ComponentSharedObshheeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlogTekstovoePole = {
  readonly __typename?: 'ComponentBlogTekstovoePole';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentBlogTekstovoePoleSBokovojLiniej = {
  readonly __typename?: 'ComponentBlogTekstovoePoleSBokovojLiniej';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentBlogTekstovoePoleVBelomBloke = {
  readonly __typename?: 'ComponentBlogTekstovoePoleVBelomBloke';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentEquipmentIzobrazhenieNaVsyuShirinuKontejnera = {
  readonly __typename?: 'ComponentEquipmentIzobrazhenieNaVsyuShirinuKontejnera';
  readonly content: UploadFile;
  readonly id: Scalars['ID']['output'];
};

export type ComponentEquipmentTekstovoePole = {
  readonly __typename?: 'ComponentEquipmentTekstovoePole';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentEquipmentTekstovoePoleSBokovojLiniej = {
  readonly __typename?: 'ComponentEquipmentTekstovoePoleSBokovojLiniej';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentNewsIzobrazhenieNaVsyuShirinuKontejnera = {
  readonly __typename?: 'ComponentNewsIzobrazhenieNaVsyuShirinuKontejnera';
  readonly content: UploadFile;
  readonly id: Scalars['ID']['output'];
};

export type ComponentNewsTekstovoePole = {
  readonly __typename?: 'ComponentNewsTekstovoePole';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentNewsTekstovoePoleSBokovojLiniej = {
  readonly __typename?: 'ComponentNewsTekstovoePoleSBokovojLiniej';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentNewsTekstovoePoleVBelomBloke = {
  readonly __typename?: 'ComponentNewsTekstovoePoleVBelomBloke';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentResultsOfWorkIzobrazhenie = {
  readonly __typename?: 'ComponentResultsOfWorkIzobrazhenie';
  readonly id: Scalars['ID']['output'];
  readonly image: UploadFile;
};

export type ComponentResultsOfWorkSsylkaNaVideo = {
  readonly __typename?: 'ComponentResultsOfWorkSsylkaNaVideo';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly preview: UploadFile;
};

export type ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera = {
  readonly __typename?: 'ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera';
  readonly content: UploadFile;
  readonly id: Scalars['ID']['output'];
};

export type ComponentServicePopularnayaUslugaPokazNaGlavnoj = {
  readonly __typename?: 'ComponentServicePopularnayaUslugaPokazNaGlavnoj';
  readonly id: Scalars['ID']['output'];
  readonly isPopular: Scalars['Boolean']['output'];
  readonly mainImage: Maybe<UploadFile>;
  readonly order: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type ComponentServicePopularnayaUslugaPokazNaGlavnojFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentServicePopularnayaUslugaPokazNaGlavnojFiltersInput>>>;
  readonly isPopular: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentServicePopularnayaUslugaPokazNaGlavnojFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentServicePopularnayaUslugaPokazNaGlavnojFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentServicePopularnayaUslugaPokazNaGlavnojInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly isPopular: InputMaybe<Scalars['Boolean']['input']>;
  readonly mainImage: InputMaybe<Scalars['ID']['input']>;
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceRezultatyRaboty = {
  readonly __typename?: 'ComponentServiceRezultatyRaboty';
  readonly id: Scalars['ID']['output'];
  readonly images: ReadonlyArray<Maybe<UploadFile>>;
  readonly images_connection: UploadFileRelationResponseCollection;
};


export type ComponentServiceRezultatyRabotyImagesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentServiceRezultatyRabotyImages_ConnectionArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceRezultatyRabotyFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceRezultatyRabotyFiltersInput>>>;
  readonly not: InputMaybe<ComponentServiceRezultatyRabotyFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceRezultatyRabotyFiltersInput>>>;
};

export type ComponentServiceRezultatyRabotyInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly images: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentServiceSpisokCzen = {
  readonly __typename?: 'ComponentServiceSpisokCzen';
  readonly id: Scalars['ID']['output'];
  readonly item: Maybe<ReadonlyArray<Maybe<ComponentServiceUslugaCzena>>>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type ComponentServiceSpisokCzenItemArgs = {
  filters: InputMaybe<ComponentServiceUslugaCzenaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceSpisokCzenFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceSpisokCzenFiltersInput>>>;
  readonly item: InputMaybe<ComponentServiceUslugaCzenaFiltersInput>;
  readonly not: InputMaybe<ComponentServiceSpisokCzenFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceSpisokCzenFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentServiceSpisokCzenInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly item: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceUslugaCzenaInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceSpisokPreimushhestv = {
  readonly __typename?: 'ComponentServiceSpisokPreimushhestv';
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentServiceSpisokPreimushhestvFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceSpisokPreimushhestvFiltersInput>>>;
  readonly not: InputMaybe<ComponentServiceSpisokPreimushhestvFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceSpisokPreimushhestvFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentServiceSpisokPreimushhestvInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceTekstovoePole = {
  readonly __typename?: 'ComponentServiceTekstovoePole';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentServiceTekstovoePoleSBokovojLiniej = {
  readonly __typename?: 'ComponentServiceTekstovoePoleSBokovojLiniej';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentServiceUslugaCzena = {
  readonly __typename?: 'ComponentServiceUslugaCzena';
  readonly id: Scalars['ID']['output'];
  readonly price: Scalars['Int']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentServiceUslugaCzenaFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceUslugaCzenaFiltersInput>>>;
  readonly not: InputMaybe<ComponentServiceUslugaCzenaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceUslugaCzenaFiltersInput>>>;
  readonly price: InputMaybe<IntFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentServiceUslugaCzenaInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly price: InputMaybe<Scalars['Int']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedAvtor = {
  readonly __typename?: 'ComponentSharedAvtor';
  readonly id: Scalars['ID']['output'];
  readonly sotrudnik: Maybe<Sotrudnik>;
};

export type ComponentSharedAvtorFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedAvtorFiltersInput>>>;
  readonly not: InputMaybe<ComponentSharedAvtorFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedAvtorFiltersInput>>>;
  readonly sotrudnik: InputMaybe<SotrudnikFiltersInput>;
};

export type ComponentSharedAvtorInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly sotrudnik: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedObshhee = {
  readonly __typename?: 'ComponentSharedObshhee';
  readonly id: Scalars['ID']['output'];
  readonly idLInk: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentSharedObshheeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedObshheeFiltersInput>>>;
  readonly idLInk: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentSharedObshheeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedObshheeFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentSharedObshheeInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly idLInk: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  readonly __typename?: 'ComponentSharedSeo';
  readonly canonicalUrl: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isNoIndexPage: Maybe<Scalars['Boolean']['output']>;
  readonly metaDescription: Maybe<Scalars['String']['output']>;
  readonly metaTitle: Maybe<Scalars['String']['output']>;
  readonly openGraph: Maybe<ComponentSharedSeoOpenGraph>;
  readonly scripts: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSeoFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  readonly canonicalUrl: InputMaybe<StringFilterInput>;
  readonly isNoIndexPage: InputMaybe<BooleanFilterInput>;
  readonly metaDescription: InputMaybe<StringFilterInput>;
  readonly metaTitle: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly openGraph: InputMaybe<ComponentSharedSeoOpenGraphFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  readonly scripts: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSeoInput = {
  readonly canonicalUrl: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly isNoIndexPage: InputMaybe<Scalars['Boolean']['input']>;
  readonly metaDescription: InputMaybe<Scalars['String']['input']>;
  readonly metaTitle: InputMaybe<Scalars['String']['input']>;
  readonly openGraph: InputMaybe<ComponentSharedSeoOpenGraphInput>;
  readonly scripts: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeoOpenGraph = {
  readonly __typename?: 'ComponentSharedSeoOpenGraph';
  readonly id: Scalars['ID']['output'];
  readonly ogDescription: Maybe<Scalars['String']['output']>;
  readonly ogImage: Maybe<UploadFile>;
  readonly ogTitle: Maybe<Scalars['String']['output']>;
  readonly ogType: Maybe<Scalars['String']['output']>;
  readonly ogUrl: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSeoOpenGraphFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedSeoOpenGraphFiltersInput>>>;
  readonly not: InputMaybe<ComponentSharedSeoOpenGraphFiltersInput>;
  readonly ogDescription: InputMaybe<StringFilterInput>;
  readonly ogTitle: InputMaybe<StringFilterInput>;
  readonly ogType: InputMaybe<StringFilterInput>;
  readonly ogUrl: InputMaybe<StringFilterInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedSeoOpenGraphFiltersInput>>>;
};

export type ComponentSharedSeoOpenGraphInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly ogDescription: InputMaybe<Scalars['String']['input']>;
  readonly ogImage: InputMaybe<Scalars['ID']['input']>;
  readonly ogTitle: InputMaybe<Scalars['String']['input']>;
  readonly ogType: InputMaybe<Scalars['String']['input']>;
  readonly ogUrl: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedStatus = {
  readonly __typename?: 'ComponentSharedStatus';
  readonly id: Scalars['ID']['output'];
  readonly mainStatus: Maybe<Enum_Componentsharedstatus_Mainstatus>;
};

export type DateFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly contains: InputMaybe<Scalars['Date']['input']>;
  readonly containsi: InputMaybe<Scalars['Date']['input']>;
  readonly endsWith: InputMaybe<Scalars['Date']['input']>;
  readonly eq: InputMaybe<Scalars['Date']['input']>;
  readonly eqi: InputMaybe<Scalars['Date']['input']>;
  readonly gt: InputMaybe<Scalars['Date']['input']>;
  readonly gte: InputMaybe<Scalars['Date']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly lt: InputMaybe<Scalars['Date']['input']>;
  readonly lte: InputMaybe<Scalars['Date']['input']>;
  readonly ne: InputMaybe<Scalars['Date']['input']>;
  readonly nei: InputMaybe<Scalars['Date']['input']>;
  readonly not: InputMaybe<DateFilterInput>;
  readonly notContains: InputMaybe<Scalars['Date']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Date']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  readonly __typename?: 'DeleteMutationResponse';
  readonly documentId: Scalars['ID']['output'];
};

export enum Enum_Componentsharedstatus_Mainstatus {
  Aktivna = 'aktivna',
  Chernovik = 'chernovik',
  Zaplanirovana = 'zaplanirovana',
  Zavershena = 'zavershena'
}

export type Error = {
  readonly __typename?: 'Error';
  readonly code: Scalars['String']['output'];
  readonly message: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nei: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Abonementy | Akczii | Blog | ComponentBlogIzobrazhenieNaVsyuShirinuKontejnera | ComponentBlogTeg | ComponentBlogTekstovoePole | ComponentBlogTekstovoePoleSBokovojLiniej | ComponentBlogTekstovoePoleVBelomBloke | ComponentEquipmentIzobrazhenieNaVsyuShirinuKontejnera | ComponentEquipmentTekstovoePole | ComponentEquipmentTekstovoePoleSBokovojLiniej | ComponentNewsIzobrazhenieNaVsyuShirinuKontejnera | ComponentNewsTekstovoePole | ComponentNewsTekstovoePoleSBokovojLiniej | ComponentNewsTekstovoePoleVBelomBloke | ComponentResultsOfWorkIzobrazhenie | ComponentResultsOfWorkSsylkaNaVideo | ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera | ComponentServicePopularnayaUslugaPokazNaGlavnoj | ComponentServiceRezultatyRaboty | ComponentServiceSpisokCzen | ComponentServiceSpisokPreimushhestv | ComponentServiceTekstovoePole | ComponentServiceTekstovoePoleSBokovojLiniej | ComponentServiceUslugaCzena | ComponentSharedAvtor | ComponentSharedObshhee | ComponentSharedSeo | ComponentSharedSeoOpenGraph | ComponentSharedStatus | I18NLocale | KategoriyaUslugi | Novosti | Oborudovanie | Otzyvy | Page | Redirect | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | RezultatyRaboty | RobotsTxt | Sotrudnik | SpeczializacziiSotrudnika | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Usluga;

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly nodes: ReadonlyArray<I18NLocale>;
  readonly pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly nei: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nei: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nei: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type KategoriyaUslugi = {
  readonly __typename?: 'KategoriyaUslugi';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly order: Scalars['Int']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly slug: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly uslugis: ReadonlyArray<Maybe<Usluga>>;
  readonly uslugis_connection: Maybe<UslugaRelationResponseCollection>;
};


export type KategoriyaUslugiUslugisArgs = {
  filters: InputMaybe<UslugaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type KategoriyaUslugiUslugis_ConnectionArgs = {
  filters: InputMaybe<UslugaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type KategoriyaUslugiEntityResponseCollection = {
  readonly __typename?: 'KategoriyaUslugiEntityResponseCollection';
  readonly nodes: ReadonlyArray<KategoriyaUslugi>;
  readonly pageInfo: Pagination;
};

export type KategoriyaUslugiFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<KategoriyaUslugiFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<KategoriyaUslugiFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<KategoriyaUslugiFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly uslugis: InputMaybe<UslugaFiltersInput>;
};

export type KategoriyaUslugiInput = {
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly uslugis: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createAbonementy: Maybe<Abonementy>;
  readonly createAkczii: Maybe<Akczii>;
  readonly createBlog: Maybe<Blog>;
  readonly createKategoriyaUslugi: Maybe<KategoriyaUslugi>;
  readonly createNovosti: Maybe<Novosti>;
  readonly createOborudovanie: Maybe<Oborudovanie>;
  readonly createOtzyvy: Maybe<Otzyvy>;
  readonly createPage: Maybe<Page>;
  readonly createRedirect: Maybe<Redirect>;
  readonly createReviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>;
  readonly createReviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly createRezultatyRaboty: Maybe<RezultatyRaboty>;
  readonly createSotrudnik: Maybe<Sotrudnik>;
  readonly createSpeczializacziiSotrudnika: Maybe<SpeczializacziiSotrudnika>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly createUsluga: Maybe<Usluga>;
  readonly deleteAbonementy: Maybe<DeleteMutationResponse>;
  readonly deleteAkczii: Maybe<DeleteMutationResponse>;
  readonly deleteBlog: Maybe<DeleteMutationResponse>;
  readonly deleteKategoriyaUslugi: Maybe<DeleteMutationResponse>;
  readonly deleteNovosti: Maybe<DeleteMutationResponse>;
  readonly deleteOborudovanie: Maybe<DeleteMutationResponse>;
  readonly deleteOtzyvy: Maybe<DeleteMutationResponse>;
  readonly deletePage: Maybe<DeleteMutationResponse>;
  readonly deleteRedirect: Maybe<DeleteMutationResponse>;
  readonly deleteReviewWorkflowsWorkflow: Maybe<DeleteMutationResponse>;
  readonly deleteReviewWorkflowsWorkflowStage: Maybe<DeleteMutationResponse>;
  readonly deleteRezultatyRaboty: Maybe<DeleteMutationResponse>;
  readonly deleteRobotsTxt: Maybe<DeleteMutationResponse>;
  readonly deleteSotrudnik: Maybe<DeleteMutationResponse>;
  readonly deleteSpeczializacziiSotrudnika: Maybe<DeleteMutationResponse>;
  readonly deleteUploadFile: Maybe<UploadFile>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteUsluga: Maybe<DeleteMutationResponse>;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateAbonementy: Maybe<Abonementy>;
  readonly updateAkczii: Maybe<Akczii>;
  readonly updateBlog: Maybe<Blog>;
  readonly updateKategoriyaUslugi: Maybe<KategoriyaUslugi>;
  readonly updateNovosti: Maybe<Novosti>;
  readonly updateOborudovanie: Maybe<Oborudovanie>;
  readonly updateOtzyvy: Maybe<Otzyvy>;
  readonly updatePage: Maybe<Page>;
  readonly updateRedirect: Maybe<Redirect>;
  readonly updateReviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>;
  readonly updateReviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly updateRezultatyRaboty: Maybe<RezultatyRaboty>;
  readonly updateRobotsTxt: Maybe<RobotsTxt>;
  readonly updateSotrudnik: Maybe<Sotrudnik>;
  readonly updateSpeczializacziiSotrudnika: Maybe<SpeczializacziiSotrudnika>;
  readonly updateUploadFile: UploadFile;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly updateUsluga: Maybe<Usluga>;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAbonementyArgs = {
  data: AbonementyInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateAkcziiArgs = {
  data: AkcziiInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateBlogArgs = {
  data: BlogInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateKategoriyaUslugiArgs = {
  data: KategoriyaUslugiInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateNovostiArgs = {
  data: NovostiInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOborudovanieArgs = {
  data: OborudovanieInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOtzyvyArgs = {
  data: OtzyvyInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateRedirectArgs = {
  data: RedirectInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateRezultatyRabotyArgs = {
  data: RezultatyRabotyInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateSotrudnikArgs = {
  data: SotrudnikInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateSpeczializacziiSotrudnikaArgs = {
  data: SpeczializacziiSotrudnikaInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateUslugaArgs = {
  data: UslugaInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationDeleteAbonementyArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteAkcziiArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteBlogArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteKategoriyaUslugiArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteNovostiArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOborudovanieArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOtzyvyArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteRedirectArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteRezultatyRabotyArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteSotrudnikArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteSpeczializacziiSotrudnikaArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUslugaArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAbonementyArgs = {
  data: AbonementyInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateAkcziiArgs = {
  data: AkcziiInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateKategoriyaUslugiArgs = {
  data: KategoriyaUslugiInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateNovostiArgs = {
  data: NovostiInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOborudovanieArgs = {
  data: OborudovanieInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOtzyvyArgs = {
  data: OtzyvyInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateRedirectArgs = {
  data: RedirectInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateRezultatyRabotyArgs = {
  data: RezultatyRabotyInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateRobotsTxtArgs = {
  data: RobotsTxtInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateSotrudnikArgs = {
  data: SotrudnikInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateSpeczializacziiSotrudnikaArgs = {
  data: SpeczializacziiSotrudnikaInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUslugaArgs = {
  data: UslugaInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type Novosti = {
  readonly __typename?: 'Novosti';
  readonly body: Maybe<ReadonlyArray<Maybe<NovostiBodyDynamicZone>>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly mainImage: UploadFile;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly slug: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type NovostiBodyDynamicZone = ComponentNewsIzobrazhenieNaVsyuShirinuKontejnera | ComponentNewsTekstovoePole | ComponentNewsTekstovoePoleSBokovojLiniej | ComponentNewsTekstovoePoleVBelomBloke | Error;

export type NovostiEntityResponseCollection = {
  readonly __typename?: 'NovostiEntityResponseCollection';
  readonly nodes: ReadonlyArray<Novosti>;
  readonly pageInfo: Pagination;
};

export type NovostiFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<NovostiFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<NovostiFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<NovostiFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type NovostiInput = {
  readonly body: InputMaybe<ReadonlyArray<Scalars['NovostiBodyDynamicZoneInput']['input']>>;
  readonly mainImage: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type Oborudovanie = {
  readonly __typename?: 'Oborudovanie';
  readonly body: ReadonlyArray<Maybe<OborudovanieBodyDynamicZone>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly longDescription: Scalars['JSON']['output'];
  readonly mainImage: UploadFile;
  readonly order: Scalars['Int']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly shortDescription: Scalars['String']['output'];
  readonly slug: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type OborudovanieBodyDynamicZone = ComponentEquipmentIzobrazhenieNaVsyuShirinuKontejnera | ComponentEquipmentTekstovoePole | ComponentEquipmentTekstovoePoleSBokovojLiniej | Error;

export type OborudovanieEntityResponseCollection = {
  readonly __typename?: 'OborudovanieEntityResponseCollection';
  readonly nodes: ReadonlyArray<Oborudovanie>;
  readonly pageInfo: Pagination;
};

export type OborudovanieFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<OborudovanieFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly longDescription: InputMaybe<JsonFilterInput>;
  readonly not: InputMaybe<OborudovanieFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<OborudovanieFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly shortDescription: InputMaybe<StringFilterInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type OborudovanieInput = {
  readonly body: InputMaybe<ReadonlyArray<Scalars['OborudovanieBodyDynamicZoneInput']['input']>>;
  readonly longDescription: InputMaybe<Scalars['JSON']['input']>;
  readonly mainImage: InputMaybe<Scalars['ID']['input']>;
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly shortDescription: InputMaybe<Scalars['String']['input']>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type Otzyvy = {
  readonly __typename?: 'Otzyvy';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly image: UploadFile;
  readonly order: Scalars['Int']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type OtzyvyEntityResponseCollection = {
  readonly __typename?: 'OtzyvyEntityResponseCollection';
  readonly nodes: ReadonlyArray<Otzyvy>;
  readonly pageInfo: Pagination;
};

export type OtzyvyFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<OtzyvyFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<OtzyvyFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<OtzyvyFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type OtzyvyInput = {
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page = {
  readonly __typename?: 'Page';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly slug: Scalars['String']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PageEntityResponseCollection = {
  readonly __typename?: 'PageEntityResponseCollection';
  readonly nodes: ReadonlyArray<Page>;
  readonly pageInfo: Pagination;
};

export type PageFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PageFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<PageFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PageFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly abonementies: ReadonlyArray<Maybe<Abonementy>>;
  readonly abonementies_connection: Maybe<AbonementyEntityResponseCollection>;
  readonly abonementy: Maybe<Abonementy>;
  readonly akczii: Maybe<Akczii>;
  readonly akcziis: ReadonlyArray<Maybe<Akczii>>;
  readonly akcziis_connection: Maybe<AkcziiEntityResponseCollection>;
  readonly blog: Maybe<Blog>;
  readonly blogs: ReadonlyArray<Maybe<Blog>>;
  readonly blogs_connection: Maybe<BlogEntityResponseCollection>;
  readonly i18NLocale: Maybe<I18NLocale>;
  readonly i18NLocales: ReadonlyArray<Maybe<I18NLocale>>;
  readonly i18NLocales_connection: Maybe<I18NLocaleEntityResponseCollection>;
  readonly kategoriyaUslugi: Maybe<KategoriyaUslugi>;
  readonly kategoriyaUslugis: ReadonlyArray<Maybe<KategoriyaUslugi>>;
  readonly kategoriyaUslugis_connection: Maybe<KategoriyaUslugiEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly novosti: Maybe<Novosti>;
  readonly novostis: ReadonlyArray<Maybe<Novosti>>;
  readonly novostis_connection: Maybe<NovostiEntityResponseCollection>;
  readonly oborudovanie: Maybe<Oborudovanie>;
  readonly oborudovanies: ReadonlyArray<Maybe<Oborudovanie>>;
  readonly oborudovanies_connection: Maybe<OborudovanieEntityResponseCollection>;
  readonly otzyvies: ReadonlyArray<Maybe<Otzyvy>>;
  readonly otzyvies_connection: Maybe<OtzyvyEntityResponseCollection>;
  readonly otzyvy: Maybe<Otzyvy>;
  readonly page: Maybe<Page>;
  readonly pages: ReadonlyArray<Maybe<Page>>;
  readonly pages_connection: Maybe<PageEntityResponseCollection>;
  readonly redirect: Maybe<Redirect>;
  readonly redirects: ReadonlyArray<Maybe<Redirect>>;
  readonly redirects_connection: Maybe<RedirectEntityResponseCollection>;
  readonly reviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>;
  readonly reviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly reviewWorkflowsWorkflowStages: ReadonlyArray<Maybe<ReviewWorkflowsWorkflowStage>>;
  readonly reviewWorkflowsWorkflowStages_connection: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  readonly reviewWorkflowsWorkflows: ReadonlyArray<Maybe<ReviewWorkflowsWorkflow>>;
  readonly reviewWorkflowsWorkflows_connection: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  readonly rezultatyRaboties: ReadonlyArray<Maybe<RezultatyRaboty>>;
  readonly rezultatyRaboties_connection: Maybe<RezultatyRabotyEntityResponseCollection>;
  readonly rezultatyRaboty: Maybe<RezultatyRaboty>;
  readonly robotsTxt: Maybe<RobotsTxt>;
  readonly sotrudnik: Maybe<Sotrudnik>;
  readonly sotrudniks: ReadonlyArray<Maybe<Sotrudnik>>;
  readonly sotrudniks_connection: Maybe<SotrudnikEntityResponseCollection>;
  readonly speczializacziiSotrudnika: Maybe<SpeczializacziiSotrudnika>;
  readonly speczializacziiSotrudnikas: ReadonlyArray<Maybe<SpeczializacziiSotrudnika>>;
  readonly speczializacziiSotrudnikas_connection: Maybe<SpeczializacziiSotrudnikaEntityResponseCollection>;
  readonly uploadFile: Maybe<UploadFile>;
  readonly uploadFiles: ReadonlyArray<Maybe<UploadFile>>;
  readonly uploadFiles_connection: Maybe<UploadFileEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRole>;
  readonly usersPermissionsRoles: ReadonlyArray<Maybe<UsersPermissionsRole>>;
  readonly usersPermissionsRoles_connection: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUser>;
  readonly usersPermissionsUsers: ReadonlyArray<Maybe<UsersPermissionsUser>>;
  readonly usersPermissionsUsers_connection: Maybe<UsersPermissionsUserEntityResponseCollection>;
  readonly usluga: Maybe<Usluga>;
  readonly uslugas: ReadonlyArray<Maybe<Usluga>>;
  readonly uslugas_connection: Maybe<UslugaEntityResponseCollection>;
};


export type QueryAbonementiesArgs = {
  filters: InputMaybe<AbonementyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAbonementies_ConnectionArgs = {
  filters: InputMaybe<AbonementyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAbonementyArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAkcziiArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAkcziisArgs = {
  filters: InputMaybe<AkcziiFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAkcziis_ConnectionArgs = {
  filters: InputMaybe<AkcziiFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBlogArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBlogsArgs = {
  filters: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBlogs_ConnectionArgs = {
  filters: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryKategoriyaUslugiArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryKategoriyaUslugisArgs = {
  filters: InputMaybe<KategoriyaUslugiFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryKategoriyaUslugis_ConnectionArgs = {
  filters: InputMaybe<KategoriyaUslugiFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNovostiArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNovostisArgs = {
  filters: InputMaybe<NovostiFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNovostis_ConnectionArgs = {
  filters: InputMaybe<NovostiFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOborudovanieArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOborudovaniesArgs = {
  filters: InputMaybe<OborudovanieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOborudovanies_ConnectionArgs = {
  filters: InputMaybe<OborudovanieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOtzyviesArgs = {
  filters: InputMaybe<OtzyvyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOtzyvies_ConnectionArgs = {
  filters: InputMaybe<OtzyvyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOtzyvyArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPagesArgs = {
  filters: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPages_ConnectionArgs = {
  filters: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRedirectArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRedirectsArgs = {
  filters: InputMaybe<RedirectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRedirects_ConnectionArgs = {
  filters: InputMaybe<RedirectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRezultatyRabotiesArgs = {
  filters: InputMaybe<RezultatyRabotyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRezultatyRaboties_ConnectionArgs = {
  filters: InputMaybe<RezultatyRabotyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRezultatyRabotyArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRobotsTxtArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySotrudnikArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySotrudniksArgs = {
  filters: InputMaybe<SotrudnikFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySotrudniks_ConnectionArgs = {
  filters: InputMaybe<SotrudnikFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySpeczializacziiSotrudnikaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySpeczializacziiSotrudnikasArgs = {
  filters: InputMaybe<SpeczializacziiSotrudnikaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySpeczializacziiSotrudnikas_ConnectionArgs = {
  filters: InputMaybe<SpeczializacziiSotrudnikaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUslugaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUslugasArgs = {
  filters: InputMaybe<UslugaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUslugas_ConnectionArgs = {
  filters: InputMaybe<UslugaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type Redirect = {
  readonly __typename?: 'Redirect';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly from: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly to: Scalars['String']['output'];
  readonly type: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type RedirectEntityResponseCollection = {
  readonly __typename?: 'RedirectEntityResponseCollection';
  readonly nodes: ReadonlyArray<Redirect>;
  readonly pageInfo: Pagination;
};

export type RedirectFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<RedirectFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly from: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<RedirectFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<RedirectFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly to: InputMaybe<StringFilterInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type RedirectInput = {
  readonly from: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly to: InputMaybe<Scalars['String']['input']>;
  readonly type: InputMaybe<Scalars['String']['input']>;
};

export type ReviewWorkflowsWorkflow = {
  readonly __typename?: 'ReviewWorkflowsWorkflow';
  readonly contentTypes: Scalars['JSON']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly stageRequiredToPublish: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly stages: ReadonlyArray<Maybe<ReviewWorkflowsWorkflowStage>>;
  readonly stages_connection: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflow>;
  readonly pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  readonly contentTypes: InputMaybe<JsonFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly stageRequiredToPublish: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly stages: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  readonly contentTypes: InputMaybe<Scalars['JSON']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly stageRequiredToPublish: InputMaybe<Scalars['ID']['input']>;
  readonly stages: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStage';
  readonly color: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly workflow: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflowStage>;
  readonly pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  readonly color: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly workflow: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  readonly color: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly workflow: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflowStage>;
};

export type RezultatyRaboty = {
  readonly __typename?: 'RezultatyRaboty';
  readonly content: ReadonlyArray<Maybe<RezultatyRabotyContentDynamicZone>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly isVideo: Scalars['Boolean']['output'];
  readonly order: Scalars['Int']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type RezultatyRabotyContentDynamicZone = ComponentResultsOfWorkIzobrazhenie | ComponentResultsOfWorkSsylkaNaVideo | Error;

export type RezultatyRabotyEntityResponseCollection = {
  readonly __typename?: 'RezultatyRabotyEntityResponseCollection';
  readonly nodes: ReadonlyArray<RezultatyRaboty>;
  readonly pageInfo: Pagination;
};

export type RezultatyRabotyFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<RezultatyRabotyFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly isVideo: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<RezultatyRabotyFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<RezultatyRabotyFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type RezultatyRabotyInput = {
  readonly content: InputMaybe<ReadonlyArray<Scalars['RezultatyRabotyContentDynamicZoneInput']['input']>>;
  readonly isVideo: InputMaybe<Scalars['Boolean']['input']>;
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
};

export type RobotsTxt = {
  readonly __typename?: 'RobotsTxt';
  readonly content: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sitemap: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type RobotsTxtInput = {
  readonly content: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sitemap: InputMaybe<Scalars['String']['input']>;
};

export type Sotrudnik = {
  readonly __typename?: 'Sotrudnik';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly order: Scalars['Int']['output'];
  readonly patronymic: Scalars['String']['output'];
  readonly photo: UploadFile;
  readonly position: Scalars['String']['output'];
  readonly priceFrom: Maybe<Scalars['Int']['output']>;
  readonly priceTo: Maybe<Scalars['Int']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly slug: Scalars['String']['output'];
  readonly speczializaczii_sotrudnikas: ReadonlyArray<Maybe<SpeczializacziiSotrudnika>>;
  readonly speczializaczii_sotrudnikas_connection: Maybe<SpeczializacziiSotrudnikaRelationResponseCollection>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SotrudnikSpeczializaczii_SotrudnikasArgs = {
  filters: InputMaybe<SpeczializacziiSotrudnikaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type SotrudnikSpeczializaczii_Sotrudnikas_ConnectionArgs = {
  filters: InputMaybe<SpeczializacziiSotrudnikaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SotrudnikEntityResponseCollection = {
  readonly __typename?: 'SotrudnikEntityResponseCollection';
  readonly nodes: ReadonlyArray<Sotrudnik>;
  readonly pageInfo: Pagination;
};

export type SotrudnikFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SotrudnikFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly firstName: InputMaybe<StringFilterInput>;
  readonly lastName: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<SotrudnikFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SotrudnikFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly patronymic: InputMaybe<StringFilterInput>;
  readonly position: InputMaybe<StringFilterInput>;
  readonly priceFrom: InputMaybe<IntFilterInput>;
  readonly priceTo: InputMaybe<IntFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly speczializaczii_sotrudnikas: InputMaybe<SpeczializacziiSotrudnikaFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SotrudnikInput = {
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly patronymic: InputMaybe<Scalars['String']['input']>;
  readonly photo: InputMaybe<Scalars['ID']['input']>;
  readonly position: InputMaybe<Scalars['String']['input']>;
  readonly priceFrom: InputMaybe<Scalars['Int']['input']>;
  readonly priceTo: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly speczializaczii_sotrudnikas: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type SotrudnikRelationResponseCollection = {
  readonly __typename?: 'SotrudnikRelationResponseCollection';
  readonly nodes: ReadonlyArray<Sotrudnik>;
};

export type SpeczializacziiSotrudnika = {
  readonly __typename?: 'SpeczializacziiSotrudnika';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly order: Scalars['Int']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sotrudnikis: ReadonlyArray<Maybe<Sotrudnik>>;
  readonly sotrudnikis_connection: Maybe<SotrudnikRelationResponseCollection>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SpeczializacziiSotrudnikaSotrudnikisArgs = {
  filters: InputMaybe<SotrudnikFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type SpeczializacziiSotrudnikaSotrudnikis_ConnectionArgs = {
  filters: InputMaybe<SotrudnikFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SpeczializacziiSotrudnikaEntityResponseCollection = {
  readonly __typename?: 'SpeczializacziiSotrudnikaEntityResponseCollection';
  readonly nodes: ReadonlyArray<SpeczializacziiSotrudnika>;
  readonly pageInfo: Pagination;
};

export type SpeczializacziiSotrudnikaFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SpeczializacziiSotrudnikaFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<SpeczializacziiSotrudnikaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SpeczializacziiSotrudnikaFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly sotrudnikis: InputMaybe<SotrudnikFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SpeczializacziiSotrudnikaInput = {
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sotrudnikis: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SpeczializacziiSotrudnikaRelationResponseCollection = {
  readonly __typename?: 'SpeczializacziiSotrudnikaRelationResponseCollection';
  readonly nodes: ReadonlyArray<SpeczializacziiSotrudnika>;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nei: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly nodes: ReadonlyArray<UploadFile>;
  readonly pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly nodes: ReadonlyArray<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRole>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly permissions: ReadonlyArray<Maybe<UsersPermissionsPermission>>;
  readonly permissions_connection: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: ReadonlyArray<Maybe<UsersPermissionsUser>>;
  readonly users_connection: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsRole>;
  readonly pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly email: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRole>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsUser>;
  readonly pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsUser>;
};

export type Usluga = {
  readonly __typename?: 'Usluga';
  readonly advantages: Maybe<ReadonlyArray<Maybe<ComponentServiceSpisokPreimushhestv>>>;
  readonly author: Maybe<ComponentSharedAvtor>;
  readonly body: ReadonlyArray<Maybe<UslugaBodyDynamicZone>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly kategoriya_uslugi: Maybe<KategoriyaUslugi>;
  readonly mainImage: UploadFile;
  readonly order: Scalars['Int']['output'];
  readonly popularService: Maybe<ComponentServicePopularnayaUslugaPokazNaGlavnoj>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly prices: Maybe<ComponentServiceSpisokCzen>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly resultsWork: Maybe<ComponentServiceRezultatyRaboty>;
  readonly seo: Maybe<ComponentSharedSeo>;
  readonly slug: Scalars['String']['output'];
  readonly tags: Maybe<ReadonlyArray<Maybe<ComponentSharedObshhee>>>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UslugaAdvantagesArgs = {
  filters: InputMaybe<ComponentServiceSpisokPreimushhestvFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UslugaTagsArgs = {
  filters: InputMaybe<ComponentSharedObshheeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UslugaBodyDynamicZone = ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera | ComponentServiceTekstovoePole | ComponentServiceTekstovoePoleSBokovojLiniej | Error;

export type UslugaEntityResponseCollection = {
  readonly __typename?: 'UslugaEntityResponseCollection';
  readonly nodes: ReadonlyArray<Usluga>;
  readonly pageInfo: Pagination;
};

export type UslugaFiltersInput = {
  readonly advantages: InputMaybe<ComponentServiceSpisokPreimushhestvFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UslugaFiltersInput>>>;
  readonly author: InputMaybe<ComponentSharedAvtorFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly documentId: InputMaybe<IdFilterInput>;
  readonly kategoriya_uslugi: InputMaybe<KategoriyaUslugiFiltersInput>;
  readonly not: InputMaybe<UslugaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UslugaFiltersInput>>>;
  readonly order: InputMaybe<IntFilterInput>;
  readonly popularService: InputMaybe<ComponentServicePopularnayaUslugaPokazNaGlavnojFiltersInput>;
  readonly price: InputMaybe<IntFilterInput>;
  readonly prices: InputMaybe<ComponentServiceSpisokCzenFiltersInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly resultsWork: InputMaybe<ComponentServiceRezultatyRabotyFiltersInput>;
  readonly seo: InputMaybe<ComponentSharedSeoFiltersInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly tags: InputMaybe<ComponentSharedObshheeFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UslugaInput = {
  readonly advantages: InputMaybe<ReadonlyArray<InputMaybe<ComponentServiceSpisokPreimushhestvInput>>>;
  readonly author: InputMaybe<ComponentSharedAvtorInput>;
  readonly body: InputMaybe<ReadonlyArray<Scalars['UslugaBodyDynamicZoneInput']['input']>>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly kategoriya_uslugi: InputMaybe<Scalars['ID']['input']>;
  readonly mainImage: InputMaybe<Scalars['ID']['input']>;
  readonly order: InputMaybe<Scalars['Int']['input']>;
  readonly popularService: InputMaybe<ComponentServicePopularnayaUslugaPokazNaGlavnojInput>;
  readonly price: InputMaybe<Scalars['Int']['input']>;
  readonly prices: InputMaybe<ComponentServiceSpisokCzenInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly resultsWork: InputMaybe<ComponentServiceRezultatyRabotyInput>;
  readonly seo: InputMaybe<ComponentSharedSeoInput>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly tags: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedObshheeInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type UslugaRelationResponseCollection = {
  readonly __typename?: 'UslugaRelationResponseCollection';
  readonly nodes: ReadonlyArray<Usluga>;
};

export type SeoFragmentFragment = { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } };

export type AbonementBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  status: InputMaybe<PublicationStatus>;
}>;


export type AbonementBySlugQuery = { readonly __typename?: 'Query', readonly abonementies: ReadonlyArray<{ readonly __typename?: 'Abonementy', readonly documentId: string, readonly title: string, readonly description: any, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string }, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type AbonementiesQueryVariables = Exact<{
  status: InputMaybe<PublicationStatus>;
}>;


export type AbonementiesQuery = { readonly __typename?: 'Query', readonly abonementies: ReadonlyArray<{ readonly __typename?: 'Abonementy', readonly documentId: string, readonly title: string, readonly description: any, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }> };

export type GetAbonementiesWithPaginationQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<PublicationStatus>;
}>;


export type GetAbonementiesWithPaginationQuery = { readonly __typename?: 'Query', readonly abonementies_connection: { readonly __typename?: 'AbonementyEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Abonementy', readonly documentId: string, readonly title: string, readonly description: any, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }>, readonly pageInfo: { readonly __typename?: 'Pagination', readonly pageCount: number, readonly total: number, readonly pageSize: number, readonly page: number } } };

export type AkcziisQueryVariables = Exact<{
  status: InputMaybe<PublicationStatus>;
}>;


export type AkcziisQuery = { readonly __typename?: 'Query', readonly akcziis: ReadonlyArray<{ readonly __typename?: 'Akczii', readonly documentId: string, readonly title: string, readonly slug: string, readonly shortDescription: string, readonly dateStart: any, readonly dateExpired: any, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }> };

export type AkcziyBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  status: InputMaybe<PublicationStatus>;
}>;


export type AkcziyBySlugQuery = { readonly __typename?: 'Query', readonly akcziis: ReadonlyArray<{ readonly __typename?: 'Akczii', readonly documentId: string, readonly title: string, readonly slug: string, readonly longDescription: string, readonly shortDescription: string, readonly dateStart: any, readonly dateExpired: any, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string }, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type BlogsQueryVariables = Exact<{
  status: InputMaybe<PublicationStatus>;
}>;


export type BlogsQuery = { readonly __typename?: 'Query', readonly blogs: ReadonlyArray<{ readonly __typename?: 'Blog', readonly documentId: string, readonly title: string, readonly slug: string, readonly datePubpublished: any, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }> };

export type BlogBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  status: InputMaybe<PublicationStatus>;
}>;


export type BlogBySlugQuery = { readonly __typename?: 'Query', readonly blogs: ReadonlyArray<{ readonly __typename?: 'Blog', readonly documentId: string, readonly title: string, readonly slug: string, readonly description: any, readonly datePubpublished: any, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string }, readonly body: ReadonlyArray<{ readonly __typename?: 'ComponentBlogIzobrazhenieNaVsyuShirinuKontejnera', readonly id: string, readonly contentMedia: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } } | { readonly __typename?: 'ComponentBlogTekstovoePole', readonly id: string, readonly contentJsonText: string } | { readonly __typename?: 'ComponentBlogTekstovoePoleSBokovojLiniej', readonly id: string, readonly contentJson: string } | { readonly __typename?: 'ComponentBlogTekstovoePoleVBelomBloke', readonly id: string, readonly contentJsonInWhiteBlock: string } | { readonly __typename?: 'Error' }>, readonly tags: ReadonlyArray<{ readonly __typename?: 'ComponentSharedObshhee', readonly id: string, readonly title: string, readonly idLInk: string }>, readonly author: { readonly __typename?: 'ComponentSharedAvtor', readonly sotrudnik: { readonly __typename?: 'Sotrudnik', readonly documentId: string, readonly lastName: string, readonly firstName: string, readonly patronymic: string, readonly position: string, readonly priceFrom: number, readonly slug: string, readonly priceTo: number, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly photo: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string } } }, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type GetBlogsWithPaginationQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<PublicationStatus>;
}>;


export type GetBlogsWithPaginationQuery = { readonly __typename?: 'Query', readonly blogs_connection: { readonly __typename?: 'BlogEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Blog', readonly documentId: string, readonly title: string, readonly slug: string, readonly datePubpublished: any, readonly publishedAt: any, readonly createdAt: any, readonly updatedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }>, readonly pageInfo: { readonly __typename?: 'Pagination', readonly pageCount: number, readonly total: number, readonly pageSize: number, readonly page: number } } };

export type KategoriyaUslugisQueryVariables = Exact<{ [key: string]: never; }>;


export type KategoriyaUslugisQuery = { readonly __typename?: 'Query', readonly kategoriyaUslugis: ReadonlyArray<{ readonly __typename?: 'KategoriyaUslugi', readonly documentId: string, readonly name: string, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any }> };

export type GetKategoriyaUslugisSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  status: InputMaybe<PublicationStatus>;
}>;


export type GetKategoriyaUslugisSlugQuery = { readonly __typename?: 'Query', readonly kategoriyaUslugis: ReadonlyArray<{ readonly __typename?: 'KategoriyaUslugi', readonly documentId: string, readonly name: string, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type GetNovostisQueryVariables = Exact<{
  status: InputMaybe<PublicationStatus>;
}>;


export type GetNovostisQuery = { readonly __typename?: 'Query', readonly novostis: ReadonlyArray<{ readonly __typename?: 'Novosti', readonly documentId: string, readonly title: string, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }> };

export type GetNovostisBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  status: InputMaybe<PublicationStatus>;
}>;


export type GetNovostisBySlugQuery = { readonly __typename?: 'Query', readonly novostis: ReadonlyArray<{ readonly __typename?: 'Novosti', readonly documentId: string, readonly title: string, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string }, readonly body: ReadonlyArray<{ readonly __typename?: 'ComponentNewsIzobrazhenieNaVsyuShirinuKontejnera', readonly id: string, readonly contentMedia: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } } | { readonly __typename?: 'ComponentNewsTekstovoePole', readonly id: string, readonly contentJsonText: string } | { readonly __typename?: 'ComponentNewsTekstovoePoleSBokovojLiniej', readonly id: string, readonly contentJson: string } | { readonly __typename?: 'ComponentNewsTekstovoePoleVBelomBloke', readonly id: string, readonly contentJsonInWhiteBlock: string } | { readonly __typename?: 'Error' }>, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type GetNovostisWithPaginationQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<PublicationStatus>;
}>;


export type GetNovostisWithPaginationQuery = { readonly __typename?: 'Query', readonly novostis_connection: { readonly __typename?: 'NovostiEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Novosti', readonly documentId: string, readonly title: string, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }>, readonly pageInfo: { readonly __typename?: 'Pagination', readonly pageCount: number, readonly total: number, readonly pageSize: number, readonly page: number } } };

export type OborudovanieBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  status: InputMaybe<PublicationStatus>;
}>;


export type OborudovanieBySlugQuery = { readonly __typename?: 'Query', readonly oborudovanies: ReadonlyArray<{ readonly __typename?: 'Oborudovanie', readonly documentId: string, readonly title: string, readonly slug: string, readonly shortDescription: string, readonly longDescription: any, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string }, readonly body: ReadonlyArray<{ readonly __typename?: 'ComponentEquipmentIzobrazhenieNaVsyuShirinuKontejnera', readonly id: string, readonly contentMedia: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } } | { readonly __typename?: 'ComponentEquipmentTekstovoePole', readonly id: string, readonly contentJsonText: string } | { readonly __typename?: 'ComponentEquipmentTekstovoePoleSBokovojLiniej', readonly id: string, readonly contentJson: string } | { readonly __typename?: 'Error' }>, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type GetOborudovaniesQueryVariables = Exact<{
  status: InputMaybe<PublicationStatus>;
}>;


export type GetOborudovaniesQuery = { readonly __typename?: 'Query', readonly oborudovanies: ReadonlyArray<{ readonly __typename?: 'Oborudovanie', readonly documentId: string, readonly title: string, readonly slug: string, readonly shortDescription: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }> };

export type GetOborudovaniesWithPaginationQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<PublicationStatus>;
}>;


export type GetOborudovaniesWithPaginationQuery = { readonly __typename?: 'Query', readonly oborudovanies_connection: { readonly __typename?: 'OborudovanieEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Oborudovanie', readonly documentId: string, readonly title: string, readonly slug: string, readonly shortDescription: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }>, readonly pageInfo: { readonly __typename?: 'Pagination', readonly pageCount: number, readonly total: number, readonly pageSize: number, readonly page: number } } };

export type OtzyviesQueryVariables = Exact<{
  status: InputMaybe<PublicationStatus>;
}>;


export type OtzyviesQuery = { readonly __typename?: 'Query', readonly otzyvies: ReadonlyArray<{ readonly __typename?: 'Otzyvy', readonly documentId: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } }> };

export type GetPageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPageBySlugQuery = { readonly __typename?: 'Query', readonly pages: ReadonlyArray<{ readonly __typename?: 'Page', readonly title: string, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type RezultatyRabotiesImagesQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
}>;


export type RezultatyRabotiesImagesQuery = { readonly __typename?: 'Query', readonly rezultatyRaboties_connection: { readonly __typename?: 'RezultatyRabotyEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'RezultatyRaboty', readonly documentId: string, readonly order: number, readonly contentImage: ReadonlyArray<{ readonly __typename: 'ComponentResultsOfWorkIzobrazhenie', readonly id: string, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } } | { readonly __typename: 'ComponentResultsOfWorkSsylkaNaVideo' } | { readonly __typename: 'Error' }> }>, readonly pageInfo: { readonly __typename?: 'Pagination', readonly pageCount: number, readonly total: number, readonly pageSize: number, readonly page: number } } };

export type RezultatyRabotiesVideosQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
}>;


export type RezultatyRabotiesVideosQuery = { readonly __typename?: 'Query', readonly rezultatyRaboties_connection: { readonly __typename?: 'RezultatyRabotyEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'RezultatyRaboty', readonly documentId: string, readonly order: number, readonly contentVideo: ReadonlyArray<{ readonly __typename: 'ComponentResultsOfWorkIzobrazhenie' } | { readonly __typename: 'ComponentResultsOfWorkSsylkaNaVideo', readonly link: string, readonly preview: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } } | { readonly __typename: 'Error' }> }>, readonly pageInfo: { readonly __typename?: 'Pagination', readonly pageCount: number, readonly total: number, readonly pageSize: number, readonly page: number } } };

export type GetRobotsTxtQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRobotsTxtQuery = { readonly __typename?: 'Query', readonly robotsTxt: { readonly __typename?: 'RobotsTxt', readonly content: string, readonly sitemap: string } };

export type SotrudnikBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  status: InputMaybe<PublicationStatus>;
}>;


export type SotrudnikBySlugQuery = { readonly __typename?: 'Query', readonly sotrudniks: ReadonlyArray<{ readonly __typename?: 'Sotrudnik', readonly documentId: string, readonly lastName: string, readonly firstName: string, readonly patronymic: string, readonly position: string, readonly priceFrom: number, readonly priceTo: number, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly photo: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string }, readonly speczializaczii_sotrudnikas: ReadonlyArray<{ readonly __typename?: 'SpeczializacziiSotrudnika', readonly title: string, readonly documentId: string }>, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type GetSotrudniksQueryVariables = Exact<{
  filters: InputMaybe<SotrudnikFiltersInput>;
  status: InputMaybe<PublicationStatus>;
}>;


export type GetSotrudniksQuery = { readonly __typename?: 'Query', readonly sotrudniks_connection: { readonly __typename?: 'SotrudnikEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Sotrudnik', readonly documentId: string, readonly lastName: string, readonly firstName: string, readonly patronymic: string, readonly position: string, readonly priceFrom: number, readonly priceTo: number, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly photo: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string }, readonly speczializaczii_sotrudnikas: ReadonlyArray<{ readonly __typename?: 'SpeczializacziiSotrudnika', readonly title: string, readonly documentId: string }> }> } };

export type GetSotrudniksWithPaginationQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<PublicationStatus>;
  titles: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetSotrudniksWithPaginationQuery = { readonly __typename?: 'Query', readonly sotrudniks_connection: { readonly __typename?: 'SotrudnikEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Sotrudnik', readonly order: number, readonly documentId: string, readonly lastName: string, readonly firstName: string, readonly patronymic: string, readonly position: string, readonly priceFrom: number, readonly priceTo: number, readonly slug: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly photo: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string }, readonly speczializaczii_sotrudnikas: ReadonlyArray<{ readonly __typename?: 'SpeczializacziiSotrudnika', readonly title: string, readonly documentId: string }> }>, readonly pageInfo: { readonly __typename?: 'Pagination', readonly pageCount: number, readonly total: number, readonly pageSize: number, readonly page: number } } };

export type GetSpeczializacziiSotrudnikasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpeczializacziiSotrudnikasQuery = { readonly __typename?: 'Query', readonly speczializacziiSotrudnikas: ReadonlyArray<{ readonly __typename?: 'SpeczializacziiSotrudnika', readonly documentId: string, readonly title: string, readonly sotrudnikis: ReadonlyArray<{ readonly __typename?: 'Sotrudnik', readonly documentId: string }> }> };

export type GetUslugaBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  status: InputMaybe<PublicationStatus>;
}>;


export type GetUslugaBySlugQuery = { readonly __typename?: 'Query', readonly uslugas: ReadonlyArray<{ readonly __typename?: 'Usluga', readonly documentId: string, readonly title: string, readonly slug: string, readonly description: string, readonly price: number, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string }, readonly tags: ReadonlyArray<{ readonly __typename?: 'ComponentSharedObshhee', readonly title: string, readonly id: string, readonly idLInk: string }>, readonly body: ReadonlyArray<{ readonly __typename: 'ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera', readonly id: string, readonly contentMedia: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } } | { readonly __typename: 'ComponentServiceTekstovoePole', readonly id: string, readonly contentJsonText: string } | { readonly __typename: 'ComponentServiceTekstovoePoleSBokovojLiniej', readonly id: string, readonly contentJson: string } | { readonly __typename: 'Error' }>, readonly advantages: ReadonlyArray<{ readonly __typename?: 'ComponentServiceSpisokPreimushhestv', readonly id: string, readonly title: string }>, readonly author: { readonly __typename?: 'ComponentSharedAvtor', readonly sotrudnik: { readonly __typename?: 'Sotrudnik', readonly documentId: string, readonly lastName: string, readonly firstName: string, readonly patronymic: string, readonly position: string, readonly priceFrom: number, readonly slug: string, readonly priceTo: number, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly photo: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string } } }, readonly resultsWork: { readonly __typename?: 'ComponentServiceRezultatyRaboty', readonly images: ReadonlyArray<{ readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string }> }, readonly kategoriya_uslugi: { readonly __typename?: 'KategoriyaUslugi', readonly name: string, readonly slug: string }, readonly prices: { readonly __typename?: 'ComponentServiceSpisokCzen', readonly title: string, readonly item: ReadonlyArray<{ readonly __typename?: 'ComponentServiceUslugaCzena', readonly id: string, readonly title: string, readonly price: number }> }, readonly seo: { readonly __typename?: 'ComponentSharedSeo', readonly metaTitle: string, readonly metaDescription: string, readonly canonicalUrl: string, readonly isNoIndexPage: boolean, readonly scripts: string, readonly openGraph: { readonly __typename?: 'ComponentSharedSeoOpenGraph', readonly ogTitle: string, readonly ogDescription: string, readonly ogType: string, readonly ogUrl: string, readonly ogImage: { readonly __typename?: 'UploadFile', readonly url: string } } } }> };

export type GetUslugasQueryVariables = Exact<{
  status: InputMaybe<PublicationStatus>;
}>;


export type GetUslugasQuery = { readonly __typename?: 'Query', readonly uslugas: ReadonlyArray<{ readonly __typename?: 'Usluga', readonly documentId: string, readonly title: string, readonly slug: string, readonly description: string, readonly price: number, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string }, readonly tags: ReadonlyArray<{ readonly __typename?: 'ComponentSharedObshhee', readonly title: string, readonly id: string, readonly idLInk: string }>, readonly body: ReadonlyArray<{ readonly __typename: 'ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera', readonly id: string, readonly contentMedia: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } } | { readonly __typename: 'ComponentServiceTekstovoePole', readonly id: string, readonly contentPlain: string } | { readonly __typename: 'ComponentServiceTekstovoePoleSBokovojLiniej', readonly id: string, readonly contentSide: string } | { readonly __typename: 'Error' }>, readonly kategoriya_uslugi: { readonly __typename?: 'KategoriyaUslugi', readonly name: string, readonly slug: string }, readonly popularService: { readonly __typename?: 'ComponentServicePopularnayaUslugaPokazNaGlavnoj', readonly id: string, readonly isPopular: boolean, readonly title: string, readonly mainImage: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string } } }> };

export type GetUslugasPopularQueryVariables = Exact<{
  pagination: InputMaybe<PaginationArg>;
  status: InputMaybe<PublicationStatus>;
}>;


export type GetUslugasPopularQuery = { readonly __typename?: 'Query', readonly uslugas: ReadonlyArray<{ readonly __typename?: 'Usluga', readonly documentId: string, readonly title: string, readonly slug: string, readonly description: string, readonly price: number, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string }, readonly tags: ReadonlyArray<{ readonly __typename?: 'ComponentSharedObshhee', readonly title: string, readonly id: string, readonly idLInk: string }>, readonly body: ReadonlyArray<{ readonly __typename: 'ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera', readonly id: string, readonly contentMedia: { readonly __typename?: 'UploadFile', readonly url: string, readonly alternativeText: string } } | { readonly __typename: 'ComponentServiceTekstovoePole', readonly id: string, readonly contentPlain: string } | { readonly __typename: 'ComponentServiceTekstovoePoleSBokovojLiniej', readonly id: string, readonly contentSide: string } | { readonly __typename: 'Error' }>, readonly popularService: { readonly __typename?: 'ComponentServicePopularnayaUslugaPokazNaGlavnoj', readonly id: string, readonly order: number, readonly isPopular: boolean, readonly title: string, readonly mainImage: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string } }, readonly kategoriya_uslugi: { readonly __typename?: 'KategoriyaUslugi', readonly name: string, readonly slug: string }, readonly advantages: ReadonlyArray<{ readonly __typename?: 'ComponentServiceSpisokPreimushhestv', readonly id: string, readonly title: string }> }> };

export type GetUslugasWithPaginationQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<PublicationStatus>;
  filters: InputMaybe<UslugaFiltersInput>;
}>;


export type GetUslugasWithPaginationQuery = { readonly __typename?: 'Query', readonly uslugas_connection: { readonly __typename?: 'UslugaEntityResponseCollection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Usluga', readonly documentId: string, readonly title: string, readonly slug: string, readonly description: string, readonly createdAt: any, readonly updatedAt: any, readonly publishedAt: any, readonly mainImage: { readonly __typename?: 'UploadFile', readonly alternativeText: string, readonly url: string }, readonly kategoriya_uslugi: { readonly __typename?: 'KategoriyaUslugi', readonly name: string, readonly slug: string } }>, readonly pageInfo: { readonly __typename?: 'Pagination', readonly pageCount: number, readonly total: number, readonly pageSize: number, readonly page: number } } };

export const SeoFragmentFragmentDoc = gql`
    fragment seoFragment on ComponentSharedSeo {
  metaTitle
  metaDescription
  canonicalUrl
  isNoIndexPage
  scripts
  openGraph {
    ogTitle
    ogDescription
    ogImage {
      url
    }
    ogType
    ogUrl
  }
}
    `;
export const AbonementBySlugDocument = gql`
    query AbonementBySlug($slug: String!, $status: PublicationStatus) {
  abonementies(filters: {slug: {eq: $slug}}, status: $status) {
    documentId
    title
    description
    mainImage {
      url
      alternativeText
    }
    slug
    createdAt
    updatedAt
    publishedAt
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const AbonementiesDocument = gql`
    query Abonementies($status: PublicationStatus) {
  abonementies(sort: "order:asc", status: $status) {
    documentId
    title
    description
    mainImage {
      url
      alternativeText
    }
    slug
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const GetAbonementiesWithPaginationDocument = gql`
    query getAbonementiesWithPagination($page: Int, $pageSize: Int, $status: PublicationStatus) {
  abonementies_connection(
    pagination: {page: $page, pageSize: $pageSize}
    status: $status
  ) {
    nodes {
      documentId
      title
      description
      mainImage {
        url
        alternativeText
      }
      slug
      createdAt
      updatedAt
      publishedAt
    }
    pageInfo {
      pageCount
      total
      pageSize
      page
    }
  }
}
    `;
export const AkcziisDocument = gql`
    query Akcziis($status: PublicationStatus) {
  akcziis(status: $status) {
    documentId
    title
    slug
    mainImage {
      url
      alternativeText
    }
    shortDescription
    dateStart
    dateExpired
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const AkcziyBySlugDocument = gql`
    query AkcziyBySlug($slug: String!, $status: PublicationStatus) {
  akcziis(filters: {slug: {eq: $slug}}, status: $status) {
    documentId
    title
    slug
    mainImage {
      url
      alternativeText
    }
    longDescription
    shortDescription
    dateStart
    dateExpired
    createdAt
    updatedAt
    publishedAt
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const BlogsDocument = gql`
    query Blogs($status: PublicationStatus) {
  blogs(sort: ["datePubpublished:desc", "publishedAt:desc"], status: $status) {
    documentId
    title
    slug
    datePubpublished
    mainImage {
      url
      alternativeText
    }
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const BlogBySlugDocument = gql`
    query BlogBySlug($slug: String!, $status: PublicationStatus) {
  blogs(
    sort: ["datePubpublished:desc", "publishedAt:desc"]
    filters: {slug: {eq: $slug}}
    status: $status
  ) {
    documentId
    title
    slug
    description
    datePubpublished
    mainImage {
      url
      alternativeText
    }
    body {
      ... on ComponentBlogTekstovoePoleVBelomBloke {
        id
        contentJsonInWhiteBlock: content
      }
      ... on ComponentBlogTekstovoePoleSBokovojLiniej {
        id
        contentJson: content
      }
      ... on ComponentBlogIzobrazhenieNaVsyuShirinuKontejnera {
        id
        contentMedia: content {
          url
          alternativeText
        }
      }
      ... on ComponentBlogTekstovoePole {
        id
        contentJsonText: content
      }
    }
    tags {
      id
      title
      idLInk
    }
    author {
      sotrudnik {
        documentId
        lastName
        firstName
        patronymic
        position
        photo {
          alternativeText
          url
        }
        priceFrom
        slug
        priceTo
        createdAt
        updatedAt
        publishedAt
      }
    }
    createdAt
    updatedAt
    publishedAt
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetBlogsWithPaginationDocument = gql`
    query getBlogsWithPagination($page: Int, $pageSize: Int, $status: PublicationStatus) {
  blogs_connection(
    pagination: {page: $page, pageSize: $pageSize}
    sort: ["datePubpublished:desc", "publishedAt:desc"]
    status: $status
  ) {
    nodes {
      documentId
      title
      slug
      datePubpublished
      publishedAt
      createdAt
      updatedAt
      mainImage {
        url
        alternativeText
      }
    }
    pageInfo {
      pageCount
      total
      pageSize
      page
    }
  }
}
    `;
export const KategoriyaUslugisDocument = gql`
    query KategoriyaUslugis {
  kategoriyaUslugis(
    sort: "order:asc"
    filters: {uslugis: {documentId: {notNull: true}}}
    pagination: {limit: 1000}
  ) {
    documentId
    name
    slug
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const GetKategoriyaUslugisSlugDocument = gql`
    query getKategoriyaUslugisSlug($slug: String!, $status: PublicationStatus) {
  kategoriyaUslugis(filters: {slug: {eq: $slug}}, status: $status) {
    documentId
    name
    slug
    createdAt
    updatedAt
    publishedAt
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetNovostisDocument = gql`
    query getNovostis($status: PublicationStatus) {
  novostis(sort: "publishedAt:desc", status: $status) {
    documentId
    title
    slug
    mainImage {
      url
      alternativeText
    }
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const GetNovostisBySlugDocument = gql`
    query getNovostisBySlug($slug: String!, $status: PublicationStatus) {
  novostis(filters: {slug: {eq: $slug}}, status: $status) {
    documentId
    title
    slug
    mainImage {
      url
      alternativeText
    }
    body {
      ... on ComponentNewsTekstovoePole {
        id
        contentJsonText: content
      }
      ... on ComponentNewsTekstovoePoleVBelomBloke {
        id
        contentJsonInWhiteBlock: content
      }
      ... on ComponentNewsTekstovoePoleSBokovojLiniej {
        id
        contentJson: content
      }
      ... on ComponentNewsIzobrazhenieNaVsyuShirinuKontejnera {
        id
        contentMedia: content {
          url
          alternativeText
        }
      }
    }
    createdAt
    updatedAt
    publishedAt
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetNovostisWithPaginationDocument = gql`
    query getNovostisWithPagination($page: Int, $pageSize: Int, $status: PublicationStatus) {
  novostis_connection(
    pagination: {page: $page, pageSize: $pageSize}
    sort: "publishedAt:desc"
    status: $status
  ) {
    nodes {
      documentId
      title
      slug
      mainImage {
        url
        alternativeText
      }
      createdAt
      updatedAt
      publishedAt
    }
    pageInfo {
      pageCount
      total
      pageSize
      page
    }
  }
}
    `;
export const OborudovanieBySlugDocument = gql`
    query OborudovanieBySlug($slug: String!, $status: PublicationStatus) {
  oborudovanies(filters: {slug: {eq: $slug}}, status: $status) {
    documentId
    title
    slug
    shortDescription
    mainImage {
      url
      alternativeText
    }
    longDescription
    body {
      ... on ComponentEquipmentTekstovoePole {
        id
        contentJsonText: content
      }
      ... on ComponentEquipmentTekstovoePoleSBokovojLiniej {
        id
        contentJson: content
      }
      ... on ComponentEquipmentIzobrazhenieNaVsyuShirinuKontejnera {
        id
        contentMedia: content {
          url
          alternativeText
        }
      }
    }
    createdAt
    updatedAt
    publishedAt
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetOborudovaniesDocument = gql`
    query getOborudovanies($status: PublicationStatus) {
  oborudovanies(sort: "order:asc", status: $status) {
    documentId
    title
    slug
    shortDescription
    mainImage {
      url
      alternativeText
    }
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const GetOborudovaniesWithPaginationDocument = gql`
    query getOborudovaniesWithPagination($page: Int, $pageSize: Int, $status: PublicationStatus) {
  oborudovanies_connection(
    sort: "order:asc"
    pagination: {page: $page, pageSize: $pageSize}
    status: $status
  ) {
    nodes {
      documentId
      title
      slug
      shortDescription
      mainImage {
        url
        alternativeText
      }
      createdAt
      updatedAt
      publishedAt
    }
    pageInfo {
      pageCount
      total
      pageSize
      page
    }
  }
}
    `;
export const OtzyviesDocument = gql`
    query Otzyvies($status: PublicationStatus) {
  otzyvies(sort: "order:asc", status: $status) {
    documentId
    image {
      url
      alternativeText
    }
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const GetPageBySlugDocument = gql`
    query getPageBySlug($slug: String!) {
  pages(filters: {slug: {eq: $slug}}) {
    title
    slug
    createdAt
    updatedAt
    publishedAt
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const RezultatyRabotiesImagesDocument = gql`
    query RezultatyRabotiesImages($page: Int, $pageSize: Int) {
  rezultatyRaboties_connection(
    sort: "order:asc"
    pagination: {page: $page, pageSize: $pageSize}
    filters: {isVideo: {eq: false}}
  ) {
    nodes {
      documentId
      order
      contentImage: content {
        __typename
        ... on ComponentResultsOfWorkIzobrazhenie {
          __typename
          id
          image {
            url
            alternativeText
          }
        }
      }
    }
    pageInfo {
      pageCount
      total
      pageSize
      page
    }
  }
}
    `;
export const RezultatyRabotiesVideosDocument = gql`
    query RezultatyRabotiesVideos($page: Int, $pageSize: Int) {
  rezultatyRaboties_connection(
    sort: "order:asc"
    pagination: {page: $page, pageSize: $pageSize}
    filters: {isVideo: {eq: true}}
  ) {
    nodes {
      documentId
      order
      contentVideo: content {
        __typename
        ... on ComponentResultsOfWorkSsylkaNaVideo {
          preview {
            url
            alternativeText
          }
          link
        }
      }
    }
    pageInfo {
      pageCount
      total
      pageSize
      page
    }
  }
}
    `;
export const GetRobotsTxtDocument = gql`
    query getRobotsTxt {
  robotsTxt {
    content
    sitemap
  }
}
    `;
export const SotrudnikBySlugDocument = gql`
    query SotrudnikBySlug($slug: String!, $status: PublicationStatus) {
  sotrudniks(filters: {slug: {eq: $slug}}, status: $status) {
    documentId
    lastName
    firstName
    patronymic
    position
    photo {
      alternativeText
      url
    }
    priceFrom
    priceTo
    slug
    createdAt
    updatedAt
    publishedAt
    speczializaczii_sotrudnikas {
      title
      documentId
    }
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetSotrudniksDocument = gql`
    query getSotrudniks($filters: SotrudnikFiltersInput, $status: PublicationStatus) {
  sotrudniks_connection(
    filters: $filters
    status: $status
    sort: "order:asc"
    pagination: {limit: 10, start: 0}
  ) {
    nodes {
      documentId
      lastName
      firstName
      patronymic
      position
      photo {
        alternativeText
        url
      }
      priceFrom
      priceTo
      slug
      createdAt
      updatedAt
      publishedAt
      speczializaczii_sotrudnikas {
        title
        documentId
      }
    }
  }
}
    `;
export const GetSotrudniksWithPaginationDocument = gql`
    query getSotrudniksWithPagination($page: Int, $pageSize: Int, $status: PublicationStatus, $titles: [String]) {
  sotrudniks_connection(
    sort: "order:asc"
    pagination: {page: $page, pageSize: $pageSize}
    status: $status
    filters: {speczializaczii_sotrudnikas: {title: {in: $titles}}}
  ) {
    nodes {
      order
      documentId
      lastName
      firstName
      patronymic
      position
      photo {
        alternativeText
        url
      }
      priceFrom
      priceTo
      slug
      createdAt
      updatedAt
      publishedAt
      speczializaczii_sotrudnikas {
        title
        documentId
      }
    }
    pageInfo {
      pageCount
      total
      pageSize
      page
    }
  }
}
    `;
export const GetSpeczializacziiSotrudnikasDocument = gql`
    query getSpeczializacziiSotrudnikas {
  speczializacziiSotrudnikas(
    sort: "order:asc"
    filters: {sotrudnikis: {documentId: {notNull: true}}}
  ) {
    documentId
    title
    sotrudnikis {
      documentId
    }
  }
}
    `;
export const GetUslugaBySlugDocument = gql`
    query getUslugaBySlug($slug: String!, $status: PublicationStatus) {
  uslugas(filters: {slug: {eq: $slug}}, status: $status) {
    documentId
    title
    slug
    description
    mainImage {
      alternativeText
      url
    }
    price
    tags {
      title
      id
      idLInk
    }
    body {
      __typename
      ... on ComponentServiceTekstovoePole {
        id
        contentJsonText: content
      }
      ... on ComponentServiceTekstovoePoleSBokovojLiniej {
        id
        contentJson: content
      }
      ... on ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera {
        id
        contentMedia: content {
          url
          alternativeText
        }
      }
    }
    advantages {
      id
      title
    }
    createdAt
    updatedAt
    publishedAt
    author {
      sotrudnik {
        documentId
        lastName
        firstName
        patronymic
        position
        photo {
          alternativeText
          url
        }
        priceFrom
        slug
        priceTo
        createdAt
        updatedAt
        publishedAt
      }
    }
    resultsWork {
      images {
        alternativeText
        url
      }
    }
    kategoriya_uslugi {
      name
      slug
    }
    prices {
      title
      item(pagination: {limit: 1000}) {
        id
        title
        price
      }
    }
    seo {
      ...seoFragment
    }
  }
}
    ${SeoFragmentFragmentDoc}`;
export const GetUslugasDocument = gql`
    query getUslugas($status: PublicationStatus) {
  uslugas(sort: "order:asc", status: $status) {
    documentId
    title
    slug
    description
    mainImage {
      alternativeText
      url
    }
    price
    tags {
      title
      id
      idLInk
    }
    body {
      __typename
      ... on ComponentServiceTekstovoePole {
        id
        contentPlain: content
      }
      ... on ComponentServiceTekstovoePoleSBokovojLiniej {
        id
        contentSide: content
      }
      ... on ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera {
        id
        contentMedia: content {
          url
          alternativeText
        }
      }
    }
    kategoriya_uslugi {
      name
      slug
    }
    popularService {
      id
      isPopular
      mainImage {
        alternativeText
        url
      }
      title
    }
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const GetUslugasPopularDocument = gql`
    query getUslugasPopular($pagination: PaginationArg, $status: PublicationStatus) {
  uslugas(
    sort: ["popularService.order:asc", "order:asc"]
    pagination: $pagination
    status: $status
    filters: {popularService: {isPopular: {eq: true}}}
  ) {
    documentId
    title
    slug
    description
    mainImage {
      alternativeText
      url
    }
    price
    tags {
      title
      id
      idLInk
    }
    body {
      __typename
      ... on ComponentServiceTekstovoePole {
        id
        contentPlain: content
      }
      ... on ComponentServiceTekstovoePoleSBokovojLiniej {
        id
        contentSide: content
      }
      ... on ComponentServiceIzobrazhenieNaVsyuShirinuKontejnera {
        id
        contentMedia: content {
          url
          alternativeText
        }
      }
    }
    popularService {
      id
      order
      isPopular
      mainImage {
        alternativeText
        url
      }
      title
    }
    kategoriya_uslugi {
      name
      slug
    }
    advantages {
      id
      title
    }
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export const GetUslugasWithPaginationDocument = gql`
    query getUslugasWithPagination($page: Int, $pageSize: Int, $status: PublicationStatus, $filters: UslugaFiltersInput) {
  uslugas_connection(
    sort: "order:asc"
    pagination: {page: $page, pageSize: $pageSize}
    status: $status
    filters: $filters
  ) {
    nodes {
      documentId
      title
      slug
      description
      mainImage {
        alternativeText
        url
      }
      createdAt
      updatedAt
      publishedAt
      kategoriya_uslugi {
        name
        slug
      }
    }
    pageInfo {
      pageCount
      total
      pageSize
      page
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AbonementBySlug(variables: AbonementBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AbonementBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AbonementBySlugQuery>({ document: AbonementBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'AbonementBySlug', 'query', variables);
    },
    Abonementies(variables?: AbonementiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AbonementiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AbonementiesQuery>({ document: AbonementiesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Abonementies', 'query', variables);
    },
    getAbonementiesWithPagination(variables?: GetAbonementiesWithPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAbonementiesWithPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAbonementiesWithPaginationQuery>({ document: GetAbonementiesWithPaginationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getAbonementiesWithPagination', 'query', variables);
    },
    Akcziis(variables?: AkcziisQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AkcziisQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AkcziisQuery>({ document: AkcziisDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Akcziis', 'query', variables);
    },
    AkcziyBySlug(variables: AkcziyBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AkcziyBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AkcziyBySlugQuery>({ document: AkcziyBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'AkcziyBySlug', 'query', variables);
    },
    Blogs(variables?: BlogsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<BlogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogsQuery>({ document: BlogsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Blogs', 'query', variables);
    },
    BlogBySlug(variables: BlogBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<BlogBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogBySlugQuery>({ document: BlogBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'BlogBySlug', 'query', variables);
    },
    getBlogsWithPagination(variables?: GetBlogsWithPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetBlogsWithPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogsWithPaginationQuery>({ document: GetBlogsWithPaginationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogsWithPagination', 'query', variables);
    },
    KategoriyaUslugis(variables?: KategoriyaUslugisQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<KategoriyaUslugisQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<KategoriyaUslugisQuery>({ document: KategoriyaUslugisDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'KategoriyaUslugis', 'query', variables);
    },
    getKategoriyaUslugisSlug(variables: GetKategoriyaUslugisSlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetKategoriyaUslugisSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetKategoriyaUslugisSlugQuery>({ document: GetKategoriyaUslugisSlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getKategoriyaUslugisSlug', 'query', variables);
    },
    getNovostis(variables?: GetNovostisQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetNovostisQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNovostisQuery>({ document: GetNovostisDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getNovostis', 'query', variables);
    },
    getNovostisBySlug(variables: GetNovostisBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetNovostisBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNovostisBySlugQuery>({ document: GetNovostisBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getNovostisBySlug', 'query', variables);
    },
    getNovostisWithPagination(variables?: GetNovostisWithPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetNovostisWithPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNovostisWithPaginationQuery>({ document: GetNovostisWithPaginationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getNovostisWithPagination', 'query', variables);
    },
    OborudovanieBySlug(variables: OborudovanieBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<OborudovanieBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OborudovanieBySlugQuery>({ document: OborudovanieBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'OborudovanieBySlug', 'query', variables);
    },
    getOborudovanies(variables?: GetOborudovaniesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetOborudovaniesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOborudovaniesQuery>({ document: GetOborudovaniesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getOborudovanies', 'query', variables);
    },
    getOborudovaniesWithPagination(variables?: GetOborudovaniesWithPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetOborudovaniesWithPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOborudovaniesWithPaginationQuery>({ document: GetOborudovaniesWithPaginationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getOborudovaniesWithPagination', 'query', variables);
    },
    Otzyvies(variables?: OtzyviesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<OtzyviesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OtzyviesQuery>({ document: OtzyviesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Otzyvies', 'query', variables);
    },
    getPageBySlug(variables: GetPageBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageBySlugQuery>({ document: GetPageBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getPageBySlug', 'query', variables);
    },
    RezultatyRabotiesImages(variables?: RezultatyRabotiesImagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RezultatyRabotiesImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RezultatyRabotiesImagesQuery>({ document: RezultatyRabotiesImagesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RezultatyRabotiesImages', 'query', variables);
    },
    RezultatyRabotiesVideos(variables?: RezultatyRabotiesVideosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RezultatyRabotiesVideosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RezultatyRabotiesVideosQuery>({ document: RezultatyRabotiesVideosDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RezultatyRabotiesVideos', 'query', variables);
    },
    getRobotsTxt(variables?: GetRobotsTxtQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetRobotsTxtQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRobotsTxtQuery>({ document: GetRobotsTxtDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getRobotsTxt', 'query', variables);
    },
    SotrudnikBySlug(variables: SotrudnikBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SotrudnikBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SotrudnikBySlugQuery>({ document: SotrudnikBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'SotrudnikBySlug', 'query', variables);
    },
    getSotrudniks(variables?: GetSotrudniksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetSotrudniksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSotrudniksQuery>({ document: GetSotrudniksDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getSotrudniks', 'query', variables);
    },
    getSotrudniksWithPagination(variables?: GetSotrudniksWithPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetSotrudniksWithPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSotrudniksWithPaginationQuery>({ document: GetSotrudniksWithPaginationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getSotrudniksWithPagination', 'query', variables);
    },
    getSpeczializacziiSotrudnikas(variables?: GetSpeczializacziiSotrudnikasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetSpeczializacziiSotrudnikasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSpeczializacziiSotrudnikasQuery>({ document: GetSpeczializacziiSotrudnikasDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getSpeczializacziiSotrudnikas', 'query', variables);
    },
    getUslugaBySlug(variables: GetUslugaBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetUslugaBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUslugaBySlugQuery>({ document: GetUslugaBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getUslugaBySlug', 'query', variables);
    },
    getUslugas(variables?: GetUslugasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetUslugasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUslugasQuery>({ document: GetUslugasDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getUslugas', 'query', variables);
    },
    getUslugasPopular(variables?: GetUslugasPopularQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetUslugasPopularQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUslugasPopularQuery>({ document: GetUslugasPopularDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getUslugasPopular', 'query', variables);
    },
    getUslugasWithPagination(variables?: GetUslugasWithPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetUslugasWithPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUslugasWithPaginationQuery>({ document: GetUslugasWithPaginationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getUslugasWithPagination', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;