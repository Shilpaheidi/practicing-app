import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LeaveDashboardDesignComponent } from './leave-dashboard-design/leave-dashboard-design.component';
import { ItemListTailwindComponent } from './item-list-tailwind/item-list-tailwind.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataManipulationComponent } from './data-manipulation/data-manipulation.component';
import { QuizComponent } from './quiz/quiz.component';
import { BudgetTrackerComponent } from './budget-tracker/budget-tracker.component';
import { PracticeComponent } from './practice/practice.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HighlightDirective } from './Directive/highlight.directive';
import { DesignComponent } from './design/design.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { RealTimeSearchComponent } from './real-time-search/real-time-search.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { DependentDropdownsComponent } from './dependent-dropdowns/dependent-dropdowns.component';
import {MatSelectModule} from '@angular/material/select';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { TestimonialCarouselComponent } from './testimonial-carousel/testimonial-carousel.component';
import { ComplexDashboardComponent } from './complex-dashboard/complex-dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { VotingDashboardComponent } from './voting-dashboard/voting-dashboard.component';
import { VotingButtonComponent } from './voting-button/voting-button.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskEditModalComponent } from './task-edit-modal/task-edit-modal.component';
import { ReusableComponent } from './reusable/reusable.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReusableTableSearchComponent } from './reusable-table-search/reusable-table-search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DesignPracticeComponent } from './design-practice/design-practice.component';
import { TableComponent } from './shared/table/table.component';
import { SideNavComponent } from './side-nav/side-nav.component';
// import { FilterPipe } from './filter.pipe';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentOneComponent,
    ItemListComponent,
    ModalComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SnakeGameComponent,
    LeaveDashboardDesignComponent,
    ItemListTailwindComponent,
    TodoListComponent,
    CalculatorComponent,
    DataManipulationComponent,
    QuizComponent,
    BudgetTrackerComponent,
    PracticeComponent,
    HabitTrackerComponent,
    DynamicComponent,
    HighlightDirective,
    DesignComponent,
    DynamicTableComponent,
    RealTimeSearchComponent,
    DependentDropdownsComponent,
    FileUploadComponent,
    SearchFilterComponent,
    TestimonialCarouselComponent,
    ComplexDashboardComponent,
    TodoComponent,
    VotingDashboardComponent,
    VotingButtonComponent,
    ChatHistoryComponent,
    ChatInputComponent,
    ProductListComponent,
    CartComponent,
    SearchComponent,
    DynamicFormComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskEditModalComponent,
    ReusableComponent,
    UserListComponent,
    PostListComponent,
    ReusableTableSearchComponent,
    SidebarComponent,
    DesignPracticeComponent,
    TableComponent,
    SideNavComponent
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSelectModule,
    MatListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
